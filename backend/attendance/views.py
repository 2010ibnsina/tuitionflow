from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Attendance
from .serializers import AttendanceSerializer


class AttendanceViewSet(viewsets.ModelViewSet):

    serializer_class = AttendanceSerializer

    permission_classes = [

        IsAuthenticated

    ]

    def get_queryset(self):

        return (

            Attendance.objects

            .filter(

                user=self.request.user

            )

            .select_related(

                "student"

            )

        )

    def perform_create(self, serializer):

        serializer.save(

            user=self.request.user

        )
