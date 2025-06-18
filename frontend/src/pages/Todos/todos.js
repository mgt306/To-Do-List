import axios from "axios";

const todoList = await axios.get("http://localhost:4000/api/todos")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

  const Todos=()=> {
    return (
      <div>{todoList}</div>
    )
  }

  export default Todos;