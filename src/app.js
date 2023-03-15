const express = require("express");
const app = express();
const subscriberModel = require("./models/subscribers");
const path =  require('path')

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// User is displayed with a homepage describing how to use various API requests
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname,'./index.html'));
});

// Displays an array of all subscribers from the database
app.get("/subscribers", async (req, res) => {
  const subscribers = await subscriberModel.find().select("-__v");
  res.json(subscribers);
});

// Displays an array of subscribers name and subscribed Channel from the database
app.get("/subscribers/names", async (req, res) => {
  const subscribers = await subscriberModel
    .find()
    .select("-_id -subscribedDate -__v");
  res.json(subscribers);
});

// Displays a particular subscriber from the database using _id
app.get("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  await subscriberModel
    .findById(id)
    .select("-__v")
    .then((data) => {
      if (!data) {
        // An error message when the subscriber is not found for the searching id.
        error = Error(`Subscriber doesn't exist with the given _id: ${id}.`);
        res.status(400).json({ message: error.message });
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      //An error message when the id is not entered in the correct format.
      res.status(400).json({
        message: `Subscriber doesn't exist with the given _id: ${id}.`,
      });
    });
});

 // Add new subscriber using postman ir insomnia
 app.post("/subscribers/add", async (request, response) => {

  //creating a new subscriber as  subscribel model is defined in model
  const subscriber = new subscriberModel({
    name: request.body.name,
    subscribedChannel: request.body.subscribedChannel
  });
  try {

    // use .save() to save it to the database.
    const newSubscriber = await subscriber.save();
    //response send to the database
    response.status(201).json({ newSubscriber }); 
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
})



// To delete any subscriber using the id 

app.delete("/subscribers/delete/:id", async (request, response) =>{
    try{

      //deleteOne() method to easily remove a one record from the database
        await subscriberModel.deleteOne({_id:request.params.id})
        response.status(200)
    response.send({message:"subscriber deleted succesfully"})  //When deleted show a custom message
    } catch{
        response.status(400);
        response.send({error:"subscriber does not exist"})  //When id is not found
    }
});


// Handles all the unwanted requests.
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;