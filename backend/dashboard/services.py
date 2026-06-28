from django.db.models import Sum, Count
from django.utils import timezone

from students.models import Student
from payments.models import Payment
from attendance.models import Attendance


def get_dashboard_data(user):

    students = Student.objects.filter(user=user)

    payments = Payment.objects.filter(user=user)

    attendance = Attendance.objects.filter(user=user)

    total_students = students.count()

    expected_income = (
        students.aggregate(
            total=Sum("monthly_fee")
        )["total"] or 0
    )

    collected_income = (
        payments.aggregate(
            total=Sum("amount")
        )["total"] or 0
    )

    due_amount = max(
        expected_income - collected_income,
        0
    )

    payment_percentage = (
        0
        if expected_income == 0
        else round(
            float(collected_income) / float(expected_income) * 100,
            2,
        )
    )

    today = timezone.now().date()

    present = attendance.filter(
        date=today,
        status="Present"
    ).count()

    absent = attendance.filter(
        date=today,
        status="Absent"
    ).count()

    late = attendance.filter(
        date=today,
        status="Late"
    ).count()

    class_distribution = list(

        students.values("class_name")

        .annotate(total=Count("id"))

        .order_by("class_name")

    )

    subject_distribution = list(

        students.values("subject")

        .annotate(total=Count("id"))

        .order_by("subject")

    )

    monthly_income = list(

        payments.values(

            "month",

            "year"

        )

        .annotate(total=Sum("amount"))

        .order_by("year", "month")

    )

    recent_students = list(

        students.order_by("-id")

        .values(

            "id",

            "name",

            "class_name",

            "subject"

        )[:5]

    )

    recent_payments = list(

        payments.select_related("student")

        .order_by("-payment_date")

        .values(

            "student__name",

            "amount",

            "month",

            "year",

            "payment_date"

        )[:5]

    )

    return {

        "total_students": total_students,

        "expected_income": expected_income,

        "collected_income": collected_income,

        "due_amount": due_amount,

        "payment_percentage": payment_percentage,

        "present": present,

        "absent": absent,

        "late": late,

        "class_distribution": class_distribution,

        "subject_distribution": subject_distribution,

        "monthly_income": monthly_income,

        "recent_students": recent_students,

        "recent_payments": recent_payments,

    }