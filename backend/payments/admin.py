from django.contrib import admin

from .models import Payment

# Show Payment table inside Django Admin

admin.site.register(Payment)