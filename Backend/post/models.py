from django.db import models

# Create your models here.
class Post(models.Model):
    date = models.DateField()
    name = models.CharField(max_length = 50)
    comment = models.CharField(max_length = 250)