

from django.shortcuts import render, redirect, get_object_or_404
import ollama
import json
from django.http import JsonResponse
from .models import Exam, TestAttempt
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pymongo import MongoClient
from .serializers import ExamSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Exam, TestAttempt



def teacher_dashboard(request):
    if request.method == "POST":
        course_name = request.POST['course_name']  
        exam_date = request.POST['exam_date'] 
        portions = request.POST['portions']  

        Exam.objects.create(course_name=course_name, exam_date=exam_date, portions=portions)
        return redirect('teacher_dashboard')

    exams = Exam.objects.all()
    return render(request, 'teacher_dashboard.html', {'exams': exams})

def student_dashboard(request):
    exams = Exam.objects.all()
    return render(request, 'student_dashboard.html', {'exams': exams})



def generate_test(request, exam_id):
    exam = get_object_or_404(Exam, id=exam_id)


    prompt = f"""
    Generate 10 multiple-choice questions based on the syllabus: {exam.portions}.
    Provide them in JSON format with this exact structure:
    {{
        "questions": [
            {{"question": "What is AI?", "options": ["A. Artificial Intelligence", "B. Apple Inc", "C. None", "D. All"], "answer": "A"}},
            {{"question": "What is ML?", "options": ["A. Machine Learning", "B. Markup Language", "C. Music Library", "D. None"], "answer": "A"}}
        ]
    }}
    Only return JSON output without extra text.
    """

    try:
        response = ollama.chat(model="mistral:7b-instruct", messages=[{"role": "user", "content": prompt}])

        
        llm_response = response['message']['content'].strip()
        questions = json.loads(llm_response)  

       
        request.session['generated_questions'] = questions['questions']
        request.session['exam_id'] = exam_id

    
        return JsonResponse(questions, safe=False)

    except json.JSONDecodeError:
        return JsonResponse({"error": "Failed to parse response from LLM. Ensure response is in JSON format."}, status=500)
    except Exception as e:
        return JsonResponse({"error": f"LLM request failed: {str(e)}"}, status=500)


def evaluate_test(request, exam_id):
    return JsonResponse({"message": "Test evaluation logic will go here."})


# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["Acadex"]
collection = db["exams"]

@api_view(['POST'])
def announce_exam(request):
    serializer = ExamSerializer(data=request.data)
    if serializer.is_valid():
        collection.insert_one(serializer.validated_data)  # Store in MongoDB
        return Response({"message": "Exam announced successfully"}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def get_exams(request):
    exams = list(collection.find({}, {"_id": 0}))  # Retrieve from MongoDB
    return Response(exams, status=200)


@api_view(['GET', 'POST'])
@csrf_exempt  # Disable CSRF for testing; enable CSRF protection in production
def teacher_dashboard(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # Parse JSON from React frontend
            course_name = data.get('course_name')
            exam_date = data.get('exam_date')
            portions = data.get('portions')

            if not (course_name and exam_date and portions):
                return JsonResponse({"error": "All fields are required"}, status=400)

            # Create and save the exam
            Exam.objects.create(course_name=course_name, exam_date=exam_date, portions=portions)
            return JsonResponse({"message": "Exam announced successfully!"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    # GET request: Return all exams as JSON
    exams = Exam.objects.all().values("course_name", "exam_date", "portions")
    return JsonResponse({"exams": list(exams)}, safe=False)



@api_view(['GET'])
def student_dashboard(request):
    exams = Exam.objects.all().values("id", "course_name", "exam_date", "portions")  # Include 'id' for the test link
    return JsonResponse({"exams": list(exams)}, safe=False)



# @api_view(['POST'])
# def submit_test(request, exam_id):
#     try:
#         data = request.data
#         user_answers = data.get("answers", {})

#         # Fetch questions from the Exam model (assuming questions are stored as JSON)
#         exam = get_object_or_404(Exam, id=exam_id)
#         questions = json.loads(exam.questions)

#         correct_count = 0
#         total_questions = len(questions)
#         results = []

#         for question in questions:
#             q_id = str(question["id"])  # Ensure ID is string for comparison
#             correct_answer = question["answer"]
#             user_answer = user_answers.get(q_id, None)
#             is_correct = user_answer == correct_answer

#             if is_correct:
#                 correct_count += 1

#             results.append({
#                 "question": question["question"],
#                 "user_answer": user_answer,
#                 "correct_answer": correct_answer,
#                 "is_correct": is_correct
#             })

#         score = (correct_count / total_questions) * 100
#         report = generate_performance_report(score, results)

#         return Response({
#             "score": score,
#             "results": results,
#             "performance_report": report
#         })

#     except json.JSONDecodeError:
#         return Response({"error": "Invalid JSON format"}, status=400)
#     except Exception as e:
#         return Response({"error": str(e)}, status=500)


# @api_view(['POST'])
# def submit_test(request, exam_id):
#     try:
#         data = request.data  # Get submitted data
#         user_answers = data.get("answers", {})

#         # Fetch questions from the session (or from the DB if stored there)
#         exam = get_object_or_404(Exam, id=exam_id)
#         questions = json.loads(exam.questions)  # Assuming questions are stored as JSON

#         correct_count = 0
#         total_questions = len(questions)
#         results = []

#         for index, question in enumerate(questions):
#             correct_answer = question["answer"]
#             user_answer = user_answers.get(str(index), None)
#             is_correct = user_answer == correct_answer

#             if is_correct:
#                 correct_count += 1

#             results.append({
#                 "question": question["question"],
#                 "user_answer": user_answer,
#                 "correct_answer": correct_answer,
#                 "is_correct": is_correct
#             })

#         # Calculate the score
#         score = (correct_count / total_questions) * 100
#         report = generate_performance_report(score, results)

#         return Response({
#             "score": score,
#             "results": results,
#             "performance_report": report
#         })

#     except json.JSONDecodeError:
#         return Response({"error": "Invalid JSON format"}, status=400)
#     except Exception as e:
#         return Response({"error": str(e)}, status=500)


def generate_performance_report(score, results):
    """Generate a performance report using Mistral 7B."""
    prompt = f"""
    The student took a test and scored {score}%. Below is their detailed performance:

    {json.dumps(results, indent=4)}

    Based on the score, generate a feedback report, highlighting strengths and weaknesses.
    Provide clear suggestions for improvement.
    """

    response = ollama.chat(model="mistral:7b-instruct", messages=[{"role": "user", "content": prompt}])
    return response['message']['content'].strip()