import {ACTIVATE_QUESTION} from "../constants/QuestionActionTypes";

export default function reducer(state = {id: 1, status: ""}, action) {
    
    switch (action.type) {
        case ACTIVATE_QUESTION:

            // console.log("--activate" + action.payload.id);
            let newState = Object.assign({}, action.payload);

            if (typeof action.payload.status == "undefined") {
                newState.status = state.status;
            }
            return newState;
        break;
      }
    
    return state;
}