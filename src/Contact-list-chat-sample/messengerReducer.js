export const initialState = {
    selectedId: 0,
    message: 'Hello',
  };
  
  export function messengerReducer(state, action) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
          message: '',
        };
      }
      case 'edited_message': {
        return {
          ...state,
          message: action.message
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }



  export function sampleReducer(state, action) {

    switch (action.type) {
        case 'case-type-A': {
            return {
                ...state,

            }
        }

        case 'case-type-B': {
            
        }

        case 'case-type-C': {

        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }
  }

  export const initialSampleState = {


  }
  