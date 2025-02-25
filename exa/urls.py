

from django.urls import path
from . import views

urlpatterns = [
    path('teacher_dashboard/', views.teacher_dashboard, name='teacher_dashboard'),  # Teacher UI
    path('student_dashboard/', views.student_dashboard, name='student_dashboard'),  # Student UI
    path('exa/evaluate_test/<int:exam_id>/', views.evaluate_test, name='evaluate_test'),
    path("generate_test/<int:exam_id>/", views.generate_test, name="generate_test"),
    # path("submit_test/<int:exam_id>/", views.submit_test, name="submit_test"),
    path('api/exams/', views.get_exams, name='get_exams'),
    path('api/exams/announce/', views.announce_exam, name='announce_exam'),
    #path("api/teacher-dashboard/", views.teacher_dashboard_api, name="teacher-dashboard-api"),
    path('api/teacher-dashboard/', views.teacher_dashboard, name='teacher_dashboard'),
    path('api/student-dashboard/', views.student_dashboard, name='student_dashboard'),
    # path("submit_test/<int:exam_id>/", views.submit_test, name="submit_test"),

]
