from django.views.generic import ListView, DetailView
from .models import BlogPage


class BlogIndexView(ListView):
    model = BlogPage
    template_name = 'blog.html'
    context_object_name = 'blogpages'

    def get_queryset(self):
        return BlogPage.objects.live().order_by('-first_published_at')


class BlogDetailView(DetailView):
    model = BlogPage
    template_name = 'blog_page.html'