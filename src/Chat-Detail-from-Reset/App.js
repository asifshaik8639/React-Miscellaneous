import React, { useState } from "react";
import ContactList from "./ContactList.jsx"
import Chat from "./Chat.js";
import ContactDetails from "./ContactDetails.jsx";

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];

  

  export default function App() {

    let [contacts, setContacts] = useState(initialContacts);
    let [selectedID, setSelectedID] = useState(0);

    function onContactSelect(event) {
        let selectedID = event.target?.key || event.target?.id;
        setSelectedID(selectedID);
    }

    function onSaveBtnClick(event) {
    }

    function onResetBtnClick(event) {
    }

    function onChatInputHandler(event) {
        let message = event.target?.value || '';
        let newContacts = contacts.slice();
        newContacts[selectedID]['messages'] = message;
        setContacts(newContacts);
    }


    return (
       <>
        <div>
            <ContactList 
                contacts={contacts} 
                onContactSelect={onContactSelect}
            />
            <Chat
                text={!!contacts && contacts[selectedID]?.messages}
                id={selectedID} 
                contact={contacts[selectedID]}
                onChatInputHandler={onChatInputHandler}
            />
        </div>
        <div>
            <ContactDetails 
                contacts={contacts} 
                selectedID={selectedID}
                onSaveBtnClick= {onSaveBtnClick}
                onResetBtnClick= {onResetBtnClick}
            />
        </div>
       </>

    );
  }


 