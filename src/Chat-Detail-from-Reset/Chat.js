import React from "react";

const Chat = function({
    text,
    id, 
    contact,
    onChatInputHandler
    }) 
{
    return (
        <div key= {id}>
            <textarea
                value={text}
                onChange={(e) => onChatInputHandler(e)} 
            />
            <button >{`your selected email ${contact.email}`}</button>
        </div>
    );
}

export default Chat;