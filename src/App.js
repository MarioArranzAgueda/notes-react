import "./styles.css";
import Input from "./Input.js";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const addNote = (note) => {
    const list = todoList.concat(note);
    setTodoList(list);
  };
  const deleteElement = (note, index) => {
    setTodoList(todoList.splice(index, 1));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <header>
        <h3>Todo List</h3>
      </header>
      <section>
        <Input addNote={addNote} />
      </section>
      <section>
        <TodoList deleteElement={deleteElement} list={todoList} />
      </section>
    </div>
  );
}
