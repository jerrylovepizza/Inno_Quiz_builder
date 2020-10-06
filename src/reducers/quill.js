// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.


import {CHANGE_QUILL_EDITOR} from "../constants/quill";

export default function reducer(state =  {quill: null, index: 0, selected: 0}, action) {
    
  switch (action.type) {
    case CHANGE_QUILL_EDITOR:
      return {
        quill: action.payload.quill,
        index: action.payload.index,
        selected: action.payload.selected,
      };
    break;

  }
  return state;
}