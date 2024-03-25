import React, {useState} from 'react';

export default function AddTodoComp({handleOnClick}) {

    let [inputText, setInputText] = useState('');
   
    return(
        <div>
            <input type='text' placeholder="Add to do"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} />

            <button id="button-id" onClick={(e) => {
                handleOnClick(inputText);
                setInputText('');
            }}>
                Add
            </button>
        </div>
    );
}