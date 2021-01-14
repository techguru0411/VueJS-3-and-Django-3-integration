# VueJS-3-and-Django-3-integration
Implementation of vue.js 3 integrated with backend in Django 3.

## Description
The project consists of serving the Vue bundle files from the staticfiles of the Django environment, using the latter the template compiled with Vue.js injected.
The bundle is created with Webpack, implementing the scripts for it, inside the Django project folder. It is necessary (only during the development stage) to run two independent servers, one for Django and one for Vue.js.

## Steps to run the project 🚀

Clone the repository
```
git clone https://github.com/EspiFreelancer/VueJS-3-and-Django-3-integration.git
```

Enter the project folder
```
cd VueJS-3-and-Django-3-integration
```

Install Django requirements
```
pip install -r requirements.txt
```

Enter the folder that contains Vue.js
```
cd ui
```

Install the dependencies for Vue.js
```
npm install
```

Run Vue.js development server
```
npm run serve
```
The development server will run at `http://localhost:8080/`. Just serve the `main.js` file.

In another terminal run Django development server
```
./manage.py runserver
```
The development server will run at `http://127.0.0.1:8000/`. Visit it to see the result.

## Advices
- These steps are for a Linux environment. For other operating systems, make the necessary adjustments to the commands.

- It is convenient to run Django within a virtual environment.

- Vue.js (and Node.js) can also be inside a virtual environment. 

- In fact you can use [nodeenv](https://pypi.org/project/nodeenv/) which can be integrated with the environment which was built by virtualenv (python) and use a single virtual environment for both.