import {CHANGE_OPTIONS} from "../constants/Index";

export default function reducer(state = {
	slug: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    pinterest: ""
}, action) {
    
    switch (action.type) {

        case CHANGE_OPTIONS:
        	let nstate = {...state};
        	nstate = Object.assign(nstate, action.payload);
        	
            return nstate;
        break;
    }
    
    return state;
}