from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
# Create your views here.

def toHome(response):
	return HttpResponseRedirect("/home")

def home(response):
	return render(response, "main/home.html", {})