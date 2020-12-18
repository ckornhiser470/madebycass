from django.shortcuts import render
from django.http import JsonResponse
from .models import Art

# Create your views here.


# Loads index.html on render
def index(request):
    return render(request, "cassandra/index.html")


def bio(request):
    return render(request, "cassandra/bio.html")


def projects(request):
    return render(request, "cassandra/projects.html")

# Returns info about selected art piece to look closer


def art(request):
    return render(request, "cassandra/art.html", {
        "art": Art.objects.all()
    })


# def journal(request):
#     return render(request, "cassandra/journal.html", {
#         "journal": Journal.objects.all()
#     })


def show_art(request, id):
    if request.method == "GET":
        art_piece = Art.objects.get(id=id)
        # return JsonResponse(art_piece.serialize(), safe=False)
        return render(request, "cassandra/piece.html", {
            "piece": art_piece
        })
    else:
        return JsonResponse({
            "error": "GET or PUT request required."
        }, status=400)
