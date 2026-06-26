from django.db import models
from django.contrib.auth.models import User

# Import Student model because every payment
# belongs to a student

from students.models import Student


class Payment(models.Model):
    user = models.ForeignKey(
    User,
    on_delete=models.CASCADE
)

    # ForeignKey creates a relationship

    # One student can have many payments

    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE
    )

    # Amount paid

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    # Example:
    # June = 6
    # July = 7

    month = models.IntegerField()

    # Example:
    # 2026

    year = models.IntegerField()

    # Date when payment was received

    payment_date = models.DateField()

    # Automatically save creation time

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.student.name} - {self.month}/{self.year}"