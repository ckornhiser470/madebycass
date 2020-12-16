
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("projects", views.projects, name="projects"),
    path("art", views.art, name="art"),
    path("journal-entries", views.journal, name="journal"),
    # API Routes

    path("art/<int:id>", views.show_art, name="show_art")
]
