
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
           #API Routes
    path("art/<int:id>", views.show_art, name="show_post")
]