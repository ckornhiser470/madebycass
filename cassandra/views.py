from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.


# Loads index.html on render
def index(request):
    return render(request, "cassandra/index.html")


def about(request):
    return render(request, "cassandra/about.html")


def projects(request):
    return render(request, "cassandra/projects.html")


def contact(request):
    return render(request, "cassandra/contact.html")
