from rest_framework.viewsets import ModelViewSet

from midapi.models import Image, GeneratedImage
from midapi.serializers import ImageSerializer, GeneratedImageSerializer

from rest_framework.response import Response
from rest_framework.decorators import action


class ImageViewset(ModelViewSet):
    serializer_class = ImageSerializer

    def get_queryset(self):
        return Image.objects.all()

    @action(detail=True, methods=["put"], url_path="remove")
    def remove(self, request, pk):
        image = self.get_object()
        image.delete()
        return Response(image)


class GeneratedImageViewset(ModelViewSet):
    serializer_class = GeneratedImageSerializer

    def get_queryset(self):
        return GeneratedImage.objects.all()
