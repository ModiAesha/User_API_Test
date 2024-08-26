# Backend (Django Rest Framework)

### Create a new Django project and app:
-django-admin startproject api_project

-cd api_project 

-python manage.py startapp backend

### Install required packages: 
-pip install djangorestframework django-otp

In /models.py, define the User model In serializers.py,
create serializers for the User mode In views.py, 
the views for APIs In urls.py, define API endpoints

### Run This commands: 
-python manage.py makemigrations 

-python manage.py migrate 

-python manage.py runserver

# Frontend (React Framework)

### Create a new React project 
-npx create-react-app-frontend 

-cd frontend

### Install HTTP requests: 
-npm install axios

### Create components folder inside the srs and all the java script file. 
-signup.js

-login.js 

-forgotpassword.js

-resetpassword.js

-profile.js(where user can update the profile)