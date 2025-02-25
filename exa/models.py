from django.db import models

from django.contrib.auth.models import User

class Course(models.Model):
    name = models.CharField(max_length=255)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name



class Exam(models.Model):
    course_name = models.CharField(max_length=255)
    exam_date = models.DateField()
    portions = models.TextField()

    def __str__(self):
        return f"{self.course_name} - {self.exam_date}"

class TestAttempt(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    score = models.FloatField(null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.student.username} - {self.exam.course.name}"

