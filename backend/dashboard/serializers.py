from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):

    total_students = serializers.IntegerField()

    expected_income = serializers.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    collected_income = serializers.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    due_amount = serializers.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    payment_percentage = serializers.FloatField()

    monthly_income = serializers.ListField()

    class_distribution = serializers.DictField()

    subject_distribution = serializers.DictField()

    recent_students = serializers.ListField()

    recent_payments = serializers.ListField()