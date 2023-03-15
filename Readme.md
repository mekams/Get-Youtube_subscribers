# Get-Youtube-Subscribers (AlmaBetter__Capstone__Project)

## Folder Structure

## Introduction

* A backend project which includes specific routes in the URL .
* User can  do the following as below:
    - *access the number of subscribers*, 
    - *access subscribers by specific IDs and names*, 
    - *add subscribers*, &
    - *delete subscibers*

## Used in this project:

* Mongoose
* Express
* MongoDB (Atlas and Compass)
* Raw data
* Vercel.json to deploy at vercel
* Path module to join index.html
* Postman || Insomnia
* nodemon

## Steps :

- *Step 1*

Install npm dependencies of express and mongoose using " npm install " command.

- *Step 2*

Using MongoDB local (Compass) as well as MongoDB Cloud (Atlas), depends on you which you want to use 
Just uncomment and comment the codes vice versa in createDatabase.js and index.js
<img width="512" alt="image" src="https://user-images.githubusercontent.com/100461901/225370197-7a1e27f2-562c-4c8b-989b-e379058032b0.png">

Start the backend server using nodemon or node src/index.js command.

- *Step 3*

- GET http://localhost:3000/ → The client will see an interface as below:
<img width="1046" alt="image" src="https://user-images.githubusercontent.com/100461901/225185118-0f5cd0a3-6b81-4b4d-bf55-375a116ac838.png">

- GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local or MongoDB cloud database.

- GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local or MongoDB cloud database.

- GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local or MongoDB cloud database.


- GET http://localhost:3000/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.

app.use() is used to handle all the unwanted requests. It will return 404 Not Found status code indicating that the requested resource could not be found but may be available in the future.


- POST http://localhost:3000/subscribers/add → When user hits this route using Postman or Insomnia with subscriber details the a new subscriber will be added to the database

- DELETE http://localhost:3000/subscribers/delete/:id → When user hits this route using Postman or Insomnia with particular subscriber ID a subscriber will be deleted from the database.

## FAQ

#### How to add new subscribers?

Use Postman or Insomnia to add new subscribers, Delete subscribers from the database.

## Deployment

The app has been deployed on 
https://get-youtube-subscriber.vercel.app/



