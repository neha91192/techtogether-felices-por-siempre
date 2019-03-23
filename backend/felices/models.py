# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Child(models.Model):
      name = models.CharField(max_length=120)
      last_seen = models.TextField()
      found = models.BooleanField(default=False)

      def _str_(self):
        return self.title