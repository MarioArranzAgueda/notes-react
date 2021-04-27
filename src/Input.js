import React, { createRef, useState } from "react";
import "./Input.css";

export default function Input({ addNote }) {
  const [text, setText] = useState(() => "");
  const inputRef = createRef();
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const clickHandler = () => {
    addNote(text);
    setText("");
    inputRef.current.focus();
  };

  return (
    <div>
      <textarea
        ref={inputRef}
        type="text"
        value={text}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
}
