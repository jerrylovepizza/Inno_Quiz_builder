import {READ_MAILER_FIELDS, READ_MATCHED_FIELDS, ADD_MAILER, DELETE_MAILER, CHANGE_MAILER} from "../constants/Index";

export default function reducer(state = {
    fields: [],
    mails: [],
}, action) {
    
    if (action.type == READ_MAILER_FIELDS) {
        let newstate = {...state}
        newstate.fields = action.payload;
        if (!newstate.mails.length) {
            newstate.mails.push({
                m_id: 0,
                q_id: 1
            });
        }

        return newstate;
    }

    if (action.type == READ_MATCHED_FIELDS) {
        let newstate = {...state}
        newstate.mails = action.payload;
        return newstate;
    }

    if (action.type == ADD_MAILER) {
        let newstate = {...state};
        newstate.mails.push({
            m_id: 0,
            q_id: 1
        });

        return newstate;
    }

    if (action.type == DELETE_MAILER) {
        let newstate = {...state};
        let index = action.payload;

        if (index >=0 ) {
            newstate.mails = [
                ...newstate.mails.slice(0, index),
                ...newstate.mails.slice(index+1)
            ];
        }

        return newstate;
    }

    if (action.type == CHANGE_MAILER) {
        let newstate = {...state};
        let index = action.payload.index;

        if (index >=0 ) {
            newstate.mails = [
                ...newstate.mails.slice(0, index),
                action.payload.mail,
                ...newstate.mails.slice(index+1)
            ];
        }

        return newstate;
    }
    return state;
}