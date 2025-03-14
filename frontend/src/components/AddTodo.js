//this component adds new ToDo items
import React, { useState } from 'react';

function AddTodo() {
  //const [text, setText] = useState('');

  const handleAddTodo = () => {
    //Implement API call to add  a new Todo item here
  };

  return (
    <div>
      <h1>Add a Task!</h1>
      <form>
        <label for="title">Title:</label><br></br>
        <input type="text" id="title"></input><br></br>
        <label for="desc">Description:</label><br></br>
        <input type="text" id="desc"></input>
      </form>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;