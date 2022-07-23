from django.urls import path, include
from . import views 

urlpatterns = [
	path('', views.toHome, name="toHome"),
	path('home/', views.home, name="home"),
]