import React, { useState } from "react";

import {foods} from "./data";
  
function filterSearchQuery(query) {
    try {
        let filteredItems = [];
        let inputQuery = query.toLowerCase();
        if(Array.isArray(foods)) {
    
           filteredItems =  foods.filter((item) => {
               return !!item && item.name.split(' ').some((word) => {
                   return word.toLowerCase().includes(inputQuery);
                });
            });
    
        } else {
            throw new Error("Not a valid Input");
        }
       return filteredItems;
    } catch (error) {
        console.error('in catch with error => ', error);
    }

}

export default function App() {

    let [items, setItems] = useState(foods);
    let [text, setText] = useState('');

    function inputSearchHandler(event) {
        let inputValue = event.target.value;
        let filteredItems = filterSearchQuery(inputValue);
        setText(inputValue);
        setItems(filteredItems);
    }

    return (
        <>
          <label>
                Search:
          </label>

          <input 
            value={text}
            onChange={(e) => inputSearchHandler(e)}
          />
          <table>
            <thead>Search Output </thead>
            {
                items.map((item) => {
                  return  <tr key={item.id}>
                         <td>{item.name}</td>
                         <td>{item.description}</td>
                     </tr>
                } )
                    
            }
          </table>
        </>
    );
}