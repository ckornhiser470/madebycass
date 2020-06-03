from django.shortcuts import render
from django.http import JsonResponse
from .models import Art

# Create your views here.


#Loads index.html on render
def index(request):
        return render(request, "cassandra/index.html",{
            "art": Art.objects.all()
        })
#Returns info about selected art piece to look closer 
def show_art(request, id):
    if request.method == "GET":
        art_piece = Art.objects.get(id=id)
        return JsonResponse(art_piece.serialize(), safe=False)
    else:
        return JsonResponse({
            "error": "GET or PUT request required."
        }, status=400)