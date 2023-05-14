import { useState } from "react";
import React from "react";
import './Input.css';

function Input({ onSendMessage }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input 
          className="textInput"
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter message"
          autoFocus
        />
        <button className="send">Send</button>
      </form>
    </div>
  );
}

export default Input;
