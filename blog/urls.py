from django.urls import path
from .views import BlogIndexView, BlogDetailView

urlpatterns = [
    path('', BlogIndexView.as_view(), name='blog_index'),
    path('<slug:slug>/', BlogDetailView.as_view(), name='blog_detail'),
]
