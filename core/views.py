from django.shortcuts import render, redirect, HttpResponse
from .forms import userRegistrationForm, userLoginForm, userProfileForm
from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm, UserChangeForm
from django.contrib.auth import login, authenticate, logout , update_session_auth_hash
from django.contrib import messages
from .models import UserProfile
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required 

# Create your views here.


def userRegister(request):
    if request.method == 'POST':
        form = userRegistrationForm(request.POST)
        if form.is_valid():
            newUser = form.save()
            """ 
            Initially the new user is register to the Research_fellow group
            """
            defaultGroup = Group.objects.get(name='Research_fellow')
            newUser.groups.add(defaultGroup)

            return redirect('dashboard')
    else:
        form = userRegistrationForm()
    return render(request, 'core/register.html', {'form': form})


def userLogin(request):
    if request.method == 'POST':
        form = userLoginForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('dashboard')
    else:
        form = userLoginForm()
    return render(request, 'core/login.html', {'form': form})


def userLogout(request):
    logout(request)
    return redirect('userLogin')

 
# change password with old password
@login_required(login_url='userLogin')
def user_change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            messages.success(request, 'Your password was successfully updated!')
            return redirect('dashboard')
        else:   
            messages.error(request, 'Something went wrong!!')
            return redirect('change_password')
    else: 
        form = PasswordChangeForm(request.user)
    return render(request, 'core/change_password.html', {'Title':'Password', 'form': form})



# change password (forget) without old password
@login_required(login_url='userLogin')
def forget_password(request):
    if request.method == 'POST':
        form = SetPasswordForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()  
            update_session_auth_hash(request, user)
            messages.success(request, 'Your password was successfully updated!')
            return redirect('dashboard')
        else:
            messages.error(request, 'Something went wrong!!')
            return redirect('forget_password')
    else:
        form = SetPasswordForm(request.user)
    return render(request, 'core/forget_password.html', {'Title':'Password', 'form': form})