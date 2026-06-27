#!/usr/bin/env bash

pip install -r requirements.txt

python manage.py collectstatic --noinput

python manage.py migrate

python manage.py shell << EOF
from django.contrib.auth.models import User

if not User.objects.filter(username="admin").exists():
    User.objects.create_superuser(
        "admin",
        "admin@example.com",
        "Admin@12345"
    )
EOF