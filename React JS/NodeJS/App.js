import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  return (
    <div className="App">
      <header>
        <div>
          <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder='Search here...'
            ></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
      </header>

      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="Continue" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
