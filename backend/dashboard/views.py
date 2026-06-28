from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .services import get_dashboard_data


class DashboardAPIView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        data = get_dashboard_data(
            request.user
        )

        return Response(data)