
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("about", views.about, name='about'),
    path("projects", views.projects, name="projects"),
    path("contact", views.contact, name="contact"),
    path("natours", views.natours, name="natours"),
    path("truvest", views.truvest, name="truvest"),
    path("dm", views.dm, name="dm"),
    path("art", views.art, name="art"),

    # API Routes
    path("art/<int:id>", views.show_art, name="show_art")
]
