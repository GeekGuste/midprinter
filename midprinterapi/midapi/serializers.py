from rest_framework.serializers import ModelSerializer
from midapi.models import Image, GeneratedImage


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ("id", "photo")


class GeneratedImageSerializer(ModelSerializer):
    class Meta:
        model = GeneratedImage
        fields = ("id", "jobId", "messageId", "content", "imageURL")
