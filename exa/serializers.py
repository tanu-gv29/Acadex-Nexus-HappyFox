from rest_framework import serializers

class ExamSerializer(serializers.Serializer):
    course_name = serializers.CharField(max_length=255)
    exam_date = serializers.DateField()
    portions = serializers.CharField()
