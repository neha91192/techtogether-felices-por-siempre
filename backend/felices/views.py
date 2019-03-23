# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ChildSerializer

from .models import Child

# Create your views here.
class ChildView(viewsets.ModelViewSet):
    serializer_class = ChildSerializer
    queryset = Child.objects.all()