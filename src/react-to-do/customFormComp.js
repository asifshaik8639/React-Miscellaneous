import React from 'react';
import { useImmer } from 'use-immer';

import './custform.js';

let initialFormState = {
    showLoading: false,
    showError: false,
    showSuccess: false,
    isDisabled: true,
    textAreaInputValue: '',
    isFormDisplayed: true
}

export default function CustomFormComp() {

    let [formState, updateFormState] = useImmer(initialFormState);

    function onTextAreaInputHandler(event) {
      let textInputValue = event.target.value;
      if(textInputValue?.trim() !== '') {
          updateFormState((draft) => {
            draft.isDisabled = false;
            draft.textAreaInputValue = event.target.value;
          });
      }
    }

    function simulateApiRequest() {
        return new Promise((resolve, reject) => {
          try {
            setTimeout(function proxyRequest(req, res) {
              if(formState.textAreaInputValue === 'India') {
                resolve('success');
              } else {
                reject('failed');
              }
              
            }, 2000);
          } catch (error) {
            reject(error);
          }

        });
    }

    async function onFormSubmitBtnClick(event) {

      try {
            event.preventDefault();
            await simulateApiRequest();
            updateFormState((draft) => {
              draft.showSuccess = true;
              draft.showError = false;
            });
      } catch (error) {
            updateFormState((draft) => {
              draft.showSuccess = false;
              draft.showError = true;
            });
      };

    }

    return(
      <div className='form-margin-class'>
        {
          !formState.showSuccess ?
            <form id="form" onSubmit = {(e) => onFormSubmitBtnClick(e)} >
            <h2>City quiz</h2>
            <p>
              What city is located on two continents?
            </p>
            <textarea id="textarea" onInput={(e) => onTextAreaInputHandler(e)}></textarea>
            <br />
            <button id="button"  disabled = {formState.isDisabled} >Submit</button>
            {
              formState.showLoading ? <p id="loading" >Loading...</p> : null
            }
            {
              formState.showError ? <p className="Error" >Error Occured...!</p> : null
            }
            </form>
            :
            null
        }
        {
            formState.showSuccess  ? <h1 id="success">That's right!</h1> : null
        }
        
      </div>
    );
}