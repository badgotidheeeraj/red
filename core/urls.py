from django.urls import path, include
from . import views

urlpatterns = [
    path('login/', views.userLogin, name='userLogin'),
    path('register/', views.userRegister, name='userRegister'),
    path('logout/', views.userLogout, name='userLogout'),
    path('change_password/', views.user_change_password, name='change_password'),
    path('forget_password/', views.forget_password, name='forget_password'),
   

]
