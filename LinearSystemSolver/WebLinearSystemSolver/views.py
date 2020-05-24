from django.shortcuts import render, redirect, HttpResponse
from LinearSystemSolver.LinearSystemManager.GetInputData import GetInputData


a = GetInputData()
a.get_matrix_from_file()


def index(request):

    return render(request, 'WebLinearSystemSolver/homePage.html')
