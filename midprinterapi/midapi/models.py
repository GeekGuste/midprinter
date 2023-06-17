from django.db import models


# Create your models here.
class Image(models.Model):
    photo = models.ImageField(upload_to="images")


class GeneratedImage(models.Model):
    jobId = models.CharField(max_length=30)
    messageId = models.CharField(max_length=30)
    content = models.TextField()
    imageURL = models.CharField(max_length=200)
