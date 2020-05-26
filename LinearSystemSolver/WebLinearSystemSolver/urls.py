from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view_system', views.view_system, name='view_random_system'),
    path('solve_system', views.solve_system, name='solve_system'),


]