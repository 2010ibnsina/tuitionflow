from rest_framework import viewsets

from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response

from rest_framework.decorators import action

from .models import Student

from .serializers import StudentSerializer

from .services import student_statistics
from .pagination import StudentPagination


class StudentViewSet(viewsets.ModelViewSet):

    serializer_class = StudentSerializer
    pagination_class = StudentPagination

    permission_classes = [

        IsAuthenticated

    ]

    def get_queryset(self):

        queryset = Student.objects.filter(

            user=self.request.user

        )

        search = self.request.query_params.get(

            "search"

        )

        if search:

            queryset = queryset.filter(

                name__icontains=search

            )

        class_name = self.request.query_params.get(

            "class"

        )

        if class_name:

            queryset = queryset.filter(

                class_name=class_name

            )

        subject = self.request.query_params.get(

            "subject"

        )

        if subject:

            queryset = (

    Student.objects

    .filter(user=self.request.user)

    .only(

        "id",

        "name",

        "phone",

        "class_name",

        "subject",

        "monthly_fee",

        "address"

    )

)

        ordering = self.request.query_params.get(
          "ordering"
)

        if ordering:

          queryset = queryset.order_by(ordering)

        else:

          queryset = queryset.order_by("-id")

        return queryset



        

    def perform_create(self, serializer):

        serializer.save(

            user=self.request.user

        )

    @action(

        detail=False,

        methods=["get"]

    )

    def statistics(self, request):

        return Response(

            student_statistics(

                request.user

            )

        )