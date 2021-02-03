import React, { useState } from "react";
import './InputBox.scss';
export default function InputBox(props) {
  const [value, setValue] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault(); // chan reload form khi submit
    if(!props.todosSubmit) return;
    const formValue = {title: value}
    props.todosSubmit(formValue);
    setValue("");
  }
  function handleChangeInput(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={value} onChange={handleChangeInput} className="input-box"/>
      </form>
    </div>
  );
}
