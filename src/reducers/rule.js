import { CHANGE_RULE, READ_RULE, ADD_RULE, DELETE_RULE, CHANGE_REDIRECT } from "../constants/rule";

export default function reducer(state = {
    rule: [
        {
            count: 1, 
            redirect: "" 
        } , 
        {
            count: 0,
            redirect: ""
        }

    ]
}, action) {
    if (action.type == READ_RULE) {
        if (typeof action.payload == "")
            return state;
        
        if (action.payload)
            state = action.payload;

        return state;
    }

    if (action.type == CHANGE_REDIRECT) {
        let index = action.payload.index;
        let result = action.payload.result;

        let nstate = [...state.rule];
        nstate[index] = {
            count: state.rule[index].count,
            redirect: result
        }
        console.log(index, nstate[index]);
        return {rule: nstate};      
    }

    if (action.type == DELETE_RULE) {

        let index = action.payload;
        let nstate = [...state.rule.slice(0, index), ...state.rule.slice(index + 1)];

        return {rule: nstate};        
    }

    if (action.type == ADD_RULE) {
        if (state.rule.length < 2) {
            return state;
        }

        let nstate = [...state.rule];
        
        if (nstate[nstate.length - 1].count == 0) {
            nstate[nstate.length - 1].count = 1;
        }

        nstate.push({
            count: 0,
            redirect: "",
        })

        return {rule: nstate};
    }

    if (action.type == CHANGE_RULE) {
        let change = action.payload.change;
        let index = action.payload.index;
        let nstate = [...state.rule];

        if (change == "+")
            nstate[index].count ++;
        else if(change == "-")
            nstate[index].count --;
        else if (change == "reset")
            nstate[index].count = action.payload.count;
        
        return { rule: nstate};
    }

    return state;
}