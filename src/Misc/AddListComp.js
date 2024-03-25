import { useState } from 'react';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function AddItemComp() {
    let [items, setItems] = useState(initialItems);

    let [inputText, setInputText] = useState('');

    function onAddItemClick(e, inputText) {
        let newId = !!items && (items?.length + 1) || 0 ;
        let newItems =  [
                        ...items,
                        {
                            id: newId, 
                            title: inputText, 
                            packed: false 
                        }
        ]

        setItems(newItems);
      
    }

  return (
    <>
        <div> 
            <input 
                type="text" 
                placeholder='Add Item'
                value={inputText}
                onChange={(e) => setInputText(e.target.value) }
            />
            <button onClick={(e) => onAddItemClick(e, inputText)}>Add</button>
        </div>
        <ul>
            {
                items.map((item, index) => {
                    <li key={item.id}>
                        <div> 
                            <input id={item.id + '#input'} type="checkbox" checked={item.packed}  />
                            {item.title}
                            <button>Delete</button>
                        </div>
                    </li>
                })
            }

        </ul>
        {
            <label>
                { `1 out of ${!!items && items?.length} packed!`}
            </label>
        }
    </>

  );
}



