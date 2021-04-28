import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";

export default function App() {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const addNote = (note) => {
    const list = todoList.concat(note);
    setTodoList(list);
  };
  const deleteElement = (index) => {
    setTodoList(
      todoList.filter((element, elementIndex) => index !== elementIndex)
    );
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <header>
        <h2 className="header">Todo List</h2>
      </header>
      <section>
        <TodoList deleteElement={deleteElement} list={todoList} />
      </section>
      <section>
        <CreateNote addNote={addNote} />
      </section>
    </div>
  );
}
