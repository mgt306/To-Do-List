//this component adds new ToDo items
import React, { useState } from 'react';

function AddTodo() {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    //Implement API call to add  a new Todo item here
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new ToDo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;