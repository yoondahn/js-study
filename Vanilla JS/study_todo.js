const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // #todo-form input
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));   // string으로 변환
}

function deleteToDo(event) {    // button click event
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    // filter을 사용하여 일치하는 id를 제외한 id만 다시 저장
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;     // li의 id에 추가
    const span = document.createElement("span");
    span.innerText = newToDo.text;  // newTodoObj의 text

    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit(event){     // form submit event
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newToDo,
        id: Date.now(), // li item을 구분
    };
    
    // list 항목 추가
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

// function sayHello(item) {   // foreach item
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem("todos");

if (savedToDos) {    // savedToDos !== null
    const parseToDos = JSON.parse(savedToDos);
    console.log(parseToDos);
    toDos = parseToDos; // 이전 투두리스트를 배열에 추가
    // parseToDos.forEach(item => console.log("this is the turn of", item));
    parseToDos.forEach(paintToDo);  // 배열의 요소마다 실행
}
