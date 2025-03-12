//this component lists existing ToDo items
import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            {/*add buttons for updating and deleting ToDo items */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;