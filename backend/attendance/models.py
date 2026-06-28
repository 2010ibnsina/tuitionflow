from django.db import models
from django.contrib.auth.models import User
from students.models import Student


class Attendance(models.Model):

    STATUS = [

        ("Present", "Present"),

        ("Absent", "Absent"),

        ("Late", "Late"),

    ]

    user = models.ForeignKey(

        User,

        on_delete=models.CASCADE,

        related_name="attendance_records"

    )

    student = models.ForeignKey(

        Student,

        on_delete=models.CASCADE,

        related_name="attendance"

    )

    date = models.DateField()

    status = models.CharField(

        max_length=10,

        choices=STATUS

    )

    remarks = models.CharField(

        max_length=255,

        blank=True

    )

    created_at = models.DateTimeField(

        auto_now_add=True

    )

    updated_at = models.DateTimeField(

        auto_now=True

    )

    class Meta:

        ordering = ["-date"]

        unique_together = ("student", "date")

        indexes = [

            models.Index(fields=["date"]),

            models.Index(fields=["status"]),

            models.Index(fields=["student"]),

            models.Index(fields=["user"]),

        ]

    def __str__(self):

        return f"{self.student.name} - {self.date} - {self.status}"

