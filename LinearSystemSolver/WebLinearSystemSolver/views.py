from django.shortcuts import render, redirect, HttpResponse
from LinearSystemSolver.LinearSystemManager.GetInputData import GetInputData
import json


def index(request):

    return render(request, 'WebLinearSystemSolver/homePage.html')


def view_system(request):
    data = GetInputData()
    linear_system = data.get_matrix_from_file()
    return HttpResponse(json.dumps(linear_system), content_type="application/json")


def solve_system(request):
    data = GetInputData()
    solution = data.get_solution_from_file()
    return HttpResponse(json.dumps(solution), content_type="application/json")
