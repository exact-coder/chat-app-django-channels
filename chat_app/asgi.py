import os

from django.core.asgi import get_asgi_application


from django.urls import path

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from channels.security.websocket import AllowedHostsOriginValidator

from chats.consumers import PersonalChatConsumer
from chats import routering

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'chat_app.settings')

application = get_asgi_application()



application = ProtocolTypeRouter({
    'http': application,
    'websocket': AllowedHostsOriginValidator(
        AuthMiddlewareStack(
        URLRouter(
            routering.websocket_urlpatterns,
        )
    )
    )
})