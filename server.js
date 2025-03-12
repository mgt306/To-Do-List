//server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); //this loads the environment variables

const app = express();
const port = process.env.PORT || 5000;

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { userNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

//Middleware
app.use(express.json());

app.listen(port, () =>{
  console.log(`Sever is running on port ${port}`)
});