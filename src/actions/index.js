import axios from "axios";
import {QUIZ_EXECUTE_QUESTION, QUIZ_EXECUTE_QUIZ, QUIZ_LOADING, READ_MAILER_FIELDS, READ_MATCHED_FIELDS,ADD_MAILER, DELETE_MAILER, CHANGE_MAILER, HELP   } from "../constants/Index";
import {READ_RESULT } from "../constants/result";
import { CHANGE_FONT, RESTORE_STYLE, READ_SETTINGS, CHANGE_COLOR, CHANGE_PARAGRAPH, CHANGE_BACKGROUND  } from "../constants/styles";
import {CHANGE_OPTIONS} from "../constants/Index";
import {READ_RULE} from "../constants/rule";

const apiUrl = window.quiz_url;
const quiz_id = window.quiz_id;

export const createPost = (data) => {
    return dispatch => {
        dispatch(dispatchEnableLoading());
        axios.post(`${apiUrl}quiz/${window.quiz_id}`, {data:data} ).then(
            res => {
                const data = res.data;
                if (data.status == "success") {
                    //window.quiz_id = data.id;
                    if (window.quiz_id == 0) {
                        window.quiz_id = data.id;
                        let url = window.location.href.split("&id=");
                        url[1] = window.quiz_id;                        
                        window.location.href = url.join("&id=");                       
                    } else if (data.id != window.quiz_id) {
                        dispatch(dispatchOptions({slug: data.id}));
                    }
                    
                }
                dispatch(dispatchDisableLoading());
            }
        ).catch(error => {
            dispatch(dispatchDisableLoading());
            throw(error);
        })
    }    
}

export const readPost = () => {
    return dispatch => {
        
        if (quiz_id > 0) {
            axios.get(`${apiUrl}quiz/${quiz_id}`).then(
                res => {
                    if (res.data) {
                        const data = res.data;
                        const mails = data.mails ? data.mails : [];
                        const settings = data.settings ? data.settings: "";
                        const questions = data.questions ? data.questions : [];
                        const options = data.options ? data.options : {slug: ""};
                        const rule = data.rule ? data.rule: "";

                        dispatch(dispatchQuiz(data.quiz));
                        dispatch(dispatchQuestion(data.questions));                                     
                        dispatch(dispatchReadResult(data.result));
                        dispatch(dispatchMatchedField(mails));
                        dispatch(dispatchSettings(settings));
                        dispatch(dispatchDisableLoading());
                        dispatch(dispatchOptions(options));    
                        dispatch(dispatchRule(rule));
                    } else {
                        dispatch(dispatchQuiz());
                        dispatch(dispatchQuestion());
                        dispatch(dispatchReadResult());
                        dispatch(dispatchMatchedField([]));
                        dispatch(dispatchSettings(""));
                        dispatch(dispatchDisableLoading());
                        dispatch(dispatchOptions({slug: ""}));    
                        dispatch(dispatchRule(""));
                    }                    
                }
            ).catch(error => {
                throw(error);
                dispatch(dispatchDisableLoading());
            })
        
            
        } else {
            dispatch(dispatchDisableLoading());
        }
    }    
}

export const readMailer = () => {
    
    return dispatch => {
        dispatch(dispatchEnableLoading());
        axios.get(`${apiUrl}mailite/`).then(
            res => {
                const data = res.data;                
                dispatch(dispatchField(data));
                dispatch(dispatchDisableLoading());
            }
        ).catch(err => {
            dispatch(dispatchDisableLoading());
            throw(err);
        })
    }
}

export function dispatchField(data) {
    return {
        type: READ_MAILER_FIELDS, 
        payload: data
    }
}

export function dispatchMatchedField(data) {
    return {
        type: READ_MATCHED_FIELDS, 
        payload: data
    }
}

export function dispatchReadResult(result) {
    return {
        type: READ_RESULT,
        payload: result,
    }
}

export function dispatchQuestion(questions) {
    return {
        type: QUIZ_EXECUTE_QUESTION,
        payload: questions
    }
}

export function dispatchQuiz(quiz) {
    return {
        type: QUIZ_EXECUTE_QUIZ,
        payload: quiz
    }
}

export function dispatchDisableLoading() {
    return {
        type: QUIZ_LOADING,
        payload: false
    }
}

export function dispatchEnableLoading() {
    return {
        type: QUIZ_LOADING,
        payload: true
    }
}

// ADD Mailer
export function dispatchAddMailer() {
    return {
        type: ADD_MAILER        
    }
}

export function dispatchDeleteMailer(e) {
    return {
        type: DELETE_MAILER,
        payload: e
    }
}

export function dispatchChangeMailer(e) {
    return {
        type: CHANGE_MAILER,
        payload: e
    }
}

// font
export function dispatchChangeFont(e) {
    return {
        type: CHANGE_FONT,
        payload: e
    }
}

export function dispatchRestoreDefault(e) {
    return {
        type: RESTORE_STYLE,
        payload: e
    }
}

export function dispatchSettings(e) {
    return {
        type: READ_SETTINGS,
        payload: e
    }
}

// color

export function dispatchColor(e) {
    return {
        type: CHANGE_COLOR,
        payload: e
    }
}

export function dispatchParagraph(e) {
    return {
        type: CHANGE_PARAGRAPH,
        payload: e
    }
}

export function dispatchHelp(e) {
    return {
        type: HELP,
        payload: e
    }
}


export function dispatchOptions(e) {
    return {
        type: CHANGE_OPTIONS,
        payload: e
    }
}

export function dispatchBackground(e) {
    return {
        type: CHANGE_BACKGROUND,
        payload: e
    }
}

export function dispatchChangeRemember(e) {
    return {
        type: CHANGE_REMEMBER,
        payload: e
    }
}

export function dispatchRule(e) {
    return {
        type: READ_RULE,
        payload: e
    }
}