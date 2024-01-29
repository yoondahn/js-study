import {useState, useEffect} from "react";

function Hello() {
  // useEffect(function() {
  //   console.log("hi");
  //   return function() {
  //     console.log("bye");
  //   };
  // }, [])

  useEffect(() => {   // cleanup function
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
}

function Effects() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  // useEffect(() => {
  //   console.log("I run when keyword&counter changes.");
  // }, [keyword, counter]);

  const [showing, setShowing] = useState(false);
  const showClick = () => setShowing((prev) => !prev);
  
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder='Search here...'
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <br></br>
      {showing ? <Hello /> : null}
      <button onClick={showClick}>{showing? "Hide" : "Show"}</button>
    </div>
  );
}

export default Effects;
