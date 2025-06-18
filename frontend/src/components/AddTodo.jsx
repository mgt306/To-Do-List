//this component adds new ToDo items
import React, { useState } from 'react';
import axios from "axios";

function AddTodo() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');
//not sure why but submitting the form does nothing
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const resp = await axios.post("http://localhost:4000/api/todos", {
        task: task,
        status: status,
        deadline: deadline
      });
      console.log(resp.data);
     /*
     const resp = await fetch('http://localhost:4000/api/todos', {
      method: 'post', 
      body: JSON.stringify({ task, status, deadline }),
      headers: {
        'Content-Type': 'application/json'
      },
     });
     const result = await resp.json();
     console.log(result);*/
      alert('Success! You have added a new Note!');
    } catch (error) {
      console.log(error.response);
      alert(error);
    }
    setTask('');
    setStatus('');
    setDeadline('');
  };

  return (
    <div>
      <h1>Add a Task!</h1>
      <form onSubmit={handleSubmit}>
        <label for="task">Task:</label><br></br>
        <input type="text" id="task" required name="task" value={task} onChange={e => setTask(e.target.value)}></input><br></br>
        <label for="status">Status:</label><br></br>
        <input type="text" id="status" required name="status" value={status} onChange={e => setStatus(e.target.value)}></input><br></br>
        <label for="deadline">Do by:</label><br></br>
        <input type="text" id="deadline" required name="deadline" value={deadline} onChange={e => setDeadline(e.target.value)}></input><br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  ); // Need to add "name" attribute and fix usestate
}

export default AddTodo;