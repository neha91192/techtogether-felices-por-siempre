# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Child

class ChildAdmin(admin.ModelAdmin): 
    list_display = ('name', 'last_seen', 'found') # list the characteristics of a child

# Register the model
admin.site.register(Child, ChildAdmin)
