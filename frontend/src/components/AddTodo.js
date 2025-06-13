//this component adds new ToDo items
import React, { useState } from 'react';
import axios from "axios";

function AddTodo() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const newNote = {
      text1: text1,
      text2: text2,
    }
    try {
      const resp = await axios.post("/api/todo", newNote);
      console.log(resp.data);
      alert('Success! You have added a new Note!');
    } catch (error) {
      console.log(error.response);
      alert(error);
    }
    setText1('');
    setText2('');
  };

  return (
    <div>
      <h1>Add a Task!</h1>
      <form onSubmit= {handleSubmit}>
        <label for="task">Task:</label><br></br>
        <input type="text" id="task" required onChange={e => setText1(e.target.value)}></input><br></br>
        <label for="status">Status:</label><br></br>
        <input type="text" id="status" required onChange={e => setText2(e.target.value)}></input><br></br>
        <label for="date">Do by:</label><br></br>
        <input type="date" id="date" required></input><br></br>
      </form>
      <button type="submit">Add</button>
    </div>
  ); // Need to add "name" attribute and fix usestate
}

export default AddTodo;