# Backend (Django Rest Framework)

### Create a new Django project and app:
-django-admin startproject api_project

-cd api_project 

-python manage.py startapp backend

### Install required packages: 
-pip install djangorestframework 

-pip install mysqlclient

-pip install djangorestframework-simplejwt


### Python files: 
In /models.py, define the User model.

In serializers.py create serializers for the User models

In views.py, the views are created

for APIs In urls.py,define API endpoints

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

-npm install react-dom


### Create components folder inside the src and all the java script files. 
-signup.js(name, email, dob, address, mobile, gender, password, )

-login.js 

-forgotpassword.js

-resetpassword.js

-profile.js(where user can update the profile)
