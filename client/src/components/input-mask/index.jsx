import React, { useState } from 'react';

const InputMask = ({setPlan}) => {
  const [inputValue, setInputValue] = useState("");
  const updateMaskedValue = (value) => {
    let stringValue = value.replace(/-/g, "");
    const regex = /^([^\s]{3})([^\s]{3})([^\s]{4})$/g;
    const check = regex.exec(value);
    if (check) {
      check.shift();
      stringValue = check.join(" - ");
    }
    setInputValue(stringValue.toUpperCase())
    setPlan(stringValue.toUpperCase())
  }
  return (
    <>
      <div className="media-plan-container-label">Media Plan</div>
      <input
        type="text"
        maxlength="10"
        onChange={e => updateMaskedValue(e.target.value)}
        name="inputValue"
        className="media-plan-container-input"
        value={inputValue}
      />
    </>
  );
};

export default InputMask;
