from django.conf.urls import include, url

urlpatterns = [
    url(r'', include('WebLinearSystemSolver.urls')),
    url(r'WebLinearSystemSolver/', include('WebLinearSystemSolver.urls')),
]
