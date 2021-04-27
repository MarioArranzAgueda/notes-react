import React from "react";
import "./TodoList.css";
import { BsTrash } from "react-icons/bs";

export default function TodoList({ list, deleteElement }) {
  return (
    <div className="todo-list">
      {list &&
        list.map((element, index) => (
          <p className="note">
            <input type="checkbox" />
            <span>{element}</span>
            <BsTrash
              className="delete-icon"
              onClick={() => {
                deleteElement(element, index);
              }}
            />
          </p>
        ))}
    </div>
  );
}
