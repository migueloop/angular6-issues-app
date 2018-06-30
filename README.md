# angular6-issues-app

Simple issues app built in  Angular6 + Material Design + Express + Swagger + MySql + Docker 

## Front-end

Front-end had been built with Angular6 + Material Design.

1. Go to project folder and install dependencies.
 ```bash
 npm install
 ```

2. Launch development server:
 ```bash
 npm start
 ```
 
 App will be accesible via: localhost:4200
 
 ### Sections
 
 * /users
 
 <p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/angular6-issues-app/master/imgs/sc2.png?raw=true" width="600"/>
 </p>

 
 * /issues
 
  <p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/angular6-issues-app/master/imgs/sc1.png?raw=true" width="600"/>
 </p>
 
 * /issues/:id
 
  <p align="center">
  <img src="https://raw.githubusercontent.com/migueloop/angular6-issues-app/master/imgs/sc3.png?raw=true" width="600"/>
 </p>
 
 ## Back-end
 
 Back-end uses docker-compose to startup api and mysql database image. To start and build database and api (executing seed.js to add initial data) just run:
 
 ```
 cd issues-backend
 docker-compose up -d
 ```
 
 You can also set up database and use nodemon to start the api without docker for development propose:
 
 ```
 docker-compose up -d db
 cd issues-backend/issues-services
 npm install
 nodemon app.js
 ```
 
 
 API will be accesible via localhost:8000
 
 ### Model
 There are 2 tables and an associative table to wrap the relationship between this 2 models:
 * Users
 * Issues
 * users_issues
 
 This model can be easily extensible adding attributes to the relational table for example to allow users to assign issues between them.
 
 
