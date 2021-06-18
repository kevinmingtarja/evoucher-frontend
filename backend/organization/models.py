from django.db import models

# Create your models here.
class Organization(models.Model):
    name = models.CharField(primary_key=True, max_length=128)
    username = models.CharField(max_length=128, blank=True)