import React, { useState } from "react";

export default function InputBox(props) {
  const [value, setValue] = useState("");
  function handleSubmitForm(e) {
    e.preventDefault(); // chan reload form khi submit
    props.todosSubmit(value);
    setValue("");
  }
  function handleChangeInput(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={value} onChange={handleChangeInput} />
      </form>
    </div>
  );
}
