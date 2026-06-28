from rest_framework import serializers

from .models import Attendance


class AttendanceSerializer(serializers.ModelSerializer):

    student_name = serializers.CharField(

        source="student.name",

        read_only=True

    )

    class_name = serializers.CharField(

        source="student.class_name",

        read_only=True

    )

    subject = serializers.CharField(

        source="student.subject",

        read_only=True

    )

    class Meta:

        model = Attendance

        fields = [

            "id",

            "student",

            "student_name",

            "class_name",

            "subject",

            "date",

            "status",

            "remarks",

        ]

        read_only_fields = [

            "id",

        ]
