# Get-Youtube-Subscribers (AlmaBetter__Capstone__Project)

## Folder Structure

        Get-Youtube_subscribers  
├─ src                   
│  ├─ models             
│  │  └─ subscribers.js  
│  ├─ app.js             
│  ├─ createDatabase.js  
│  ├─ data.js            
│  ├─ index.html         
│  └─ youtube.png        
├─ index.js              
├─ package-lock.json     
├─ package.json          
├─ Readme.md             
└─ vercel.json     


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
* dotenv

## Steps :

- *Step 1*

Install npm dependencies of express and mongoose using " npm install " command.

- *Step 2*

Using MongoDB local (Compass) as well as MongoDB Cloud (Atlas), depends on you which you want to use 
Just uncomment and comment the codes vice versa in createDatabase.js and index.js<br/>
* - **note** : To demonstrate I am using deployed project over the vercel<br/>
<img width="512" alt="image" src="https://user-images.githubusercontent.com/100461901/225370197-7a1e27f2-562c-4c8b-989b-e379058032b0.png"><br/>

Start the backend server using nodemon or node index.js command.

- *Step 3*

- GET http://localhost:3000/ → The client will see an interface as below:<br/>
<img width="1120" alt="image" src="https://user-images.githubusercontent.com/100461901/225604069-a409ea9f-513a-4486-a434-e2e3879ac2e7.png"><br/>

- GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local or MongoDB cloud database. <br/>

<img width="895" alt="image" src="https://user-images.githubusercontent.com/100461901/225373501-34bdba93-21c2-448c-a59c-a704da4e3fb4.png"> <br/>


- GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="900" alt="image" src="https://user-images.githubusercontent.com/100461901/225373777-023c2ec3-a7eb-4620-9499-679bd7ef4f64.png"><br/>

- GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="902" alt="image" src="https://user-images.githubusercontent.com/100461901/225374019-c95d305e-6b9f-4754-b432-2693b5d59a17.png"><br/>

- GET http://localhost:3000/invalid → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.<br/>

<img width="901" alt="image" src="https://user-images.githubusercontent.com/100461901/225374412-d5e5236c-7cef-4ae6-8a00-bc1ca96aec62.png"><br/>

app.use() is used to handle all the unwanted requests. It will return 404 Not Found status code indicating that the requested resource could not be found but may be available in the future.


- POST http://localhost:3000/subscribers/add → When user hits this route using Postman or Insomnia with subscriber details the a new subscriber will be added to the database <br/>

__Insomnia__ (Adding subscriber)
<img width="902" alt="image" src="https://user-images.githubusercontent.com/100461901/225371573-395ae429-aa22-416b-ae3a-901e4268f533.png"><br/>

- DELETE http://localhost:3000/subscribers/delete/:id → When user hits this route using Postman or Insomnia with particular subscriber ID a subscriber will be deleted from the database.<br/>

__Postman__ (Deleting Subscriber with added subscriber id) <br/>

<img width="790" alt="image" src="https://user-images.githubusercontent.com/100461901/225375157-aba1aa70-9203-4a3d-adb4-1d07c2648210.png"><br/>

* -fetching again to check subscriber deleted or not <br/>

<img width="821" alt="image" src="https://user-images.githubusercontent.com/100461901/225375559-37bba0b0-c3f0-4dd8-8645-09b7ca61e95e.png">

## FAQ

#### How to add new subscribers & delete ?

Use Postman or Insomnia to add new subscribers, Delete subscribers from the database.<br/>

## Deployment

 *__live link__*<br/>
 https://youtube-sub-get.vercel.app/
 <hr/>



      

