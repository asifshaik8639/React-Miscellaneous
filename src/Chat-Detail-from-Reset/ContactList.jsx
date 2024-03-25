import React from "react";

function Contact({contact, onContactSelect}) {
    return (
        <div style={{}}>
            <button className="form-detail" id={contact.id}
                    onClick={(e) => {onContactSelect(e)}}
                >
                {contact.name}
            </button>
        </div>
    );
}

export default function ContactList({contacts, onContactSelect}) {
    return (
        <>
            {
                contacts.map(contact => {
                return  <Contact 
                        key={contact.id} 
                        contact={contact} 
                        onContactSelect={onContactSelect} />
                })
            }
        </>
    );
  }