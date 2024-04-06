from django.urls import path

from chats import consumers

websocket_urlpatterns = [
    path('ws/<int:id>/',consumers.PersonalChatConsumer.as_asgi()),
]