from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status
from .models import Post
from .serializers import PostSerializer

# GET ALL POST
# CREATE A POST
# LIKE AND DISLIKE POST 
@api_view(['GET','POST'])
def post_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = PostSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


