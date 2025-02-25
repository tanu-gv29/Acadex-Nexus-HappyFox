"""
URL configuration for Acadex_Nexus project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path
# from . import views
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('teacher/', views.teacher_dashboard, name='teacher_dashboard'),
#     path('student/', views.student_dashboard, name='student_dashboard'),
#     path('generate_test/<int:exam_id>/', views.generate_test, name='generate_test'),
#     path('evaluate_test/<int:exam_id>/', views.evaluate_test, name='evaluate_test'),
# ]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django Admin
    path('exa/', include('exa.urls')),  # Include app URLs
]

