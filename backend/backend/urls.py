from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    path("admin/", admin.site.urls),

    path("api/accounts/", include("accounts.urls")),

    path(
        "api/token/",
        TokenObtainPairView.as_view(),
    ),

    path(
        "api/token/refresh/",
        TokenRefreshView.as_view(),
    ),

    # Students
    path("api/", include("students.urls")),

    # Payments
    path("api/", include("payments.urls")),

    # Attendance
    path("api/", include("attendance.urls")),

    # Dashboard ✅
    path("api/", include("dashboard.urls")),
]