const mongoose = require('mongoose');

//schema 
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String, 
    required: true,
  }, 
  deadline: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", todoSchema);
//export the model
module.exports = Todo;