from django.urls import path
from .views import index, tab1, tab2, tab3, register_data, delete_data, register_lost_found, delete_lost_found
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index, name='index'),
    path('tab1/', tab1, name='tab1'),
    path('register_data/', register_data, name='register_data'),
    path('delete_data/<int:location_id>/', delete_data, name='delete_data'),
    path('register_lost_found/', register_lost_found, name='register_lost_found'),
    path('delete/<int:lost_found_id>/', delete_lost_found, name='delete_lost_found'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)