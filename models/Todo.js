const mongoose = require('mongoose');

//schema 
const todoSchema = new mongoose.Schema({
  text: String,
  text: String,
});

//export the model
module.exports =  mongoose.model('Todo', todoSchema);