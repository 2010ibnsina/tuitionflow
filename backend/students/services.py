from django.db.models import Sum

from .models import Student


def student_statistics(user):

    students = Student.objects.filter(
        user=user
    )

    return {

        "total_students": students.count(),

        "expected_income": students.aggregate(

            total=Sum("monthly_fee")

        )["total"] or 0,

        "class_count": students.values(

            "class_name"

        ).distinct().count(),

        "subject_count": students.values(

            "subject"

        ).distinct().count(),

    }