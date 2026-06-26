from rest_framework import serializers

from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):

    # Get student's name from related Student model
    student_name = serializers.CharField(
        source="student.name",
        read_only=True
    )

    class Meta:
        model = Payment

        fields = "__all__"