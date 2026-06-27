from django.db import models
from students.models import Student
from django.contrib.auth.models import User

class Attendance(models.Model):

    STATUS = (
        ("Present", "Present"),
        ("Absent", "Absent"),
        ("Late", "Late"),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

    status = models.CharField(max_length=10, choices=STATUS)
    date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.name} - {self.status}"