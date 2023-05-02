# Web Application for Library Store
This is a web application built with React and Spring Boot. 
Application has features where user can
* See the available books
* Leave a review for book
* Search all available books
* Checkout books

## Running the React Server
You need to have node and java installed to run it locally.

### Start Frontend Server
Navigate to 03-frontend -> react-library
> npm install

> npm start

This will start the development server at http://localhost:3000.

### Start backend server

> SpringBootLibraryApplication.java

This will start the server at http://localhost:8080.

## Usage
Once both servers are running, you can access the web application at http://localhost:3000/api/home. 
The React front-end communicates with the Spring Boot back-end to retrieve and display data.
