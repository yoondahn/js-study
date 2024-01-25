import {useState} from "react";
import './7_ToDo.css'

function ToDo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
            return;
        }
        setTodos((currentArray) => [todo, ...currentArray]);    // == function cuurenArray() {}
        // console.log(todos);
        setTodo("");
    };
    console.log(todos);
    // console.log(todos.map((item, index) => <li key={index}>{item}</li>));

    return (
        <div className="todo-app">
          <h2>My Movies ({todos.length})</h2>
          <form onSubmit={onSubmit}>
            <input
              value={todo}
              onChange={onChange}
              type="text"
              placeholder="Write your Movies"
            ></input>
            <button>Add Movie</button>
          </form>
          <ul>
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    );
}     

export default ToDo;
