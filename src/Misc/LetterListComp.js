import { useState } from "react";

export const initialLetters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
  }, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
  }, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
  }];
  

   export function LetterComp({item, selectedId, onToggleBtnHanlder}) {        
        return (
            <li key= {item.id} className={ item.id === selectedId ? 'add-highlight-class' : ''}>
                <button onClick={(e) => onToggleBtnHanlder(e, item.id)}>
                    {item.isStarred ? 'Star' : 'Unstar'}
                </button>
                {
                    item.subject
                }
            </li>
        );
    }

    export default function LetterListComp() {

        let [items, setItems] = useState(initialLetters);
        let [selectedID, setSelectedId] = useState(null);

        function onItemFocusHandler(event) {
            let clickedItemid = event.target?.key || null;
            setSelectedId(clickedItemid);
        }

        function onToggleBtnHanlder(event, itemId) {
          let newItems = items.map((item) => {
                if(item.id === itemId) {
                    return {
                        ...item,
                        isStarred: !item.isStarred
                    }
                } else {
                    return item;
                }
            });

            setItems(newItems);
        }

        return (
            <ul onFocus={(e) => onItemFocusHandler(e)}>
                {
                    items.map((item) => { <LetterComp item = {item} 
                                                      selectedId = {selectedID}
                                                      onToggleBtnHanlder = {onToggleBtnHanlder}  
                                         /> })
                }
            </ul>
        );
    }