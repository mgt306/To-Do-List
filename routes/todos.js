const router = require("express").Router();
const Todo = require("../models/Todo");

//CRUD routes
//create a new ToDo
router.post('/', async (req, res) =>{
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
router.get('/', async (req, res) => {
  try{
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve ToDos' });
  }
});

//Update a ToDo
router.put('/:id', async (req, res) => {
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