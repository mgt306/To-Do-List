const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

//CRUD routes
//create a new ToDo
router.post("/", async (req, res) => {
  Todo.create({
    task: req.body.task,
    status: req.body.status,
    deadline: req.body.deadline,
  })
  .then((todo) => res.json(todo))
  .catch((err) => res.json(err));
});

//read all ToDos
router.get('/', async (req, res) => {
  try{
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve ToDos' });
  }
}); 

//get by id
router.get('/:id', async (req, res) =>{
  const id = req.params.id;
  Todo.findById({ _id: id})
  .then((todo) => res.json(todo))
  .catch((err) => {
    console.log("Cannot get user", err);
    res.status(500).end();
  });
});

//Update a ToDo
router.put('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const updateData = {
      status: req.body.status,
      deadline: req.body.deadline
    };
    const todo = await Todo.findByIdAndUpdate({ _id: id }, updateData, { new: true});
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update ToDo' });
  }
});

//Delete a ToDo
router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete ToDo' });
  }
});

module.exports = router;