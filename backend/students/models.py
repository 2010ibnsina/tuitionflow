from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=100)

    subject = models.CharField(max_length=100)

    monthly_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    def __str__(self):
        return self.name