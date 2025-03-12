//this component lets us exit exisiting ToDos
import React, { useState } from 'react';

function EditTodo({ todo }) {
  const [text, setText] = useState(todo.text);

  const handleUpdateTodo = () => {
    //implement API call to update the ToDo item here
  };

  return (
    <div>
      <input  
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default EditTodo;