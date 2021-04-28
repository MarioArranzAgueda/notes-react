import React from "react";
import "./TodoList.css";
import { BsTrash } from "react-icons/bs";

export default function TodoList({ list, deleteElement }) {
  return (
    <div className="todo-list">
      {list &&
        list.map((element, index) => (
          <div className="note" key={element.id}>
            <span>{element.note}</span>
            <BsTrash
              className="delete-icon"
              onClick={() => {
                deleteElement(index);
              }}
            />
          </div>
        ))}
      {list.length === 0 && (
        <p className="notes-empty">No hay notas disponibles</p>
      )}
    </div>
  );
}
