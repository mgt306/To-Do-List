//server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoute = require("./routes/todos");

dotenv.config(); //this loads the environment variables

const app = express();
const port = process.env.PORT || 4000;

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { /*useNewUrlParser: true, useUnifiedTopology: true*/})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

//Middleware
app.use(express.json());
app.use("/api/todos", todoRoute);

/* CRUD routes moved to todos.js in routes folder
//CRUD routes
//create a new ToDo
app.post('/routes/todos', async (req, res) =>{
  try{
    const { text, text2 } = req.body;
    const todo = new Todo({ text, text2 });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create ToDo' });
  }
});

//read all ToDos
app.get('/routes/todos', async (req, res) => {
  try{
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve ToDos' });
  }
});

//Update a ToDo
app.put('/routes/todos/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const { text, text2 } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { text, text2 }, { new: true});
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update ToDo' });
  }
});

//Delete a ToDo
app.delete('/routes/todos/:id', async (req, res) => {
  try{
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete ToDo' });
  }
});
*/
app.listen(port, () =>{
  console.log(`Sever is running on port ${port}`)
});