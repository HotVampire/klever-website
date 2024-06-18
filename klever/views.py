from django.shortcuts import render
from .models import Product


def index(request):
    return render(request, 'index.html')


def courses(request):
    return render(request, 'courses.html')


def products(request):
    return render(request, 'products.html')


def Sale(request):
    products = Product.objects.all()
    return render(request, 'sale.html', {'products': products})


def events(request):
    return render(request, 'events.html')


def contacts(request):
    return render(request, 'contacts.html')

