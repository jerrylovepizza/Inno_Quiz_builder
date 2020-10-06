import {HELP} from "../constants/Index";

export default function reducer(state = true, action) {
    
    switch (action.type) {
        case HELP:
        	
            state = action.payload;
            return state;
        break;
      }
    
    return state;
}