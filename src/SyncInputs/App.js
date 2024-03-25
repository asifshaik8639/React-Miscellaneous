import { useState } from "react";

export default function SyncInputs() {

  let [inputText, setInputText] = useState('');

  function onInputTextChange(event) {
    setInputText(event.target.value);
  }

  return (
    <>
        <Input labelName={'First Name'} 
              inputText={inputText} 
              onInputTextChange={onInputTextChange}/>

        <Input labelName={'Last Name'} 
              inputText={inputText} 
              onInputTextChange={onInputTextChange}/>
    </>
  );
}

export function Input({labelName, inputText, onInputTextChange}) {
  return (
    <>
     <label>{labelName}</label>
     {' '}
      <input 
        type="text"
        value={inputText}
        onChange={(e) => onInputTextChange(e) }
      />
    </>
  );
}