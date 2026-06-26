from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(
        source="student.name",
        read_only=True
    )

    class Meta:
        model = Payment
        fields = "__all__"

        # ADD THIS
        read_only_fields = [
            "user",
            "student_name"
        ]