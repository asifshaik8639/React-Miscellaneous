import React from 'react';

export default function ContactDetails({
    contacts, 
    selectedID,
    onSaveBtnClick,
    onResetBtnClick
    }) {

    return (
        <div className='contact-details-container'>
            <label className='field'>
                {'Name'} : {' '}
                <input value={contacts[selectedID]?.name}/>
            </label>

            <label className='field'>
                {'Email'} : {' '}
                <input value={contacts[selectedID]?.email}/>
            </label>

            <div className="contc-detl-contrs-container">
                <button className='detl-contrs' onClick={(e) => onSaveBtnClick(e)} >Save</button>
                <button className='detl-contrs' onClick={(e) => onResetBtnClick(e)} >Reset</button>
            </div>
        </div>
    );
  }