import { CHANGE_QUESTION , CHANGE_CORRECT_ANSWER, CHANGE_QUESTION_MULTI, ADD_NEW_QUESTION, ADD_NEW_ANSWER, CHANGE_QUESTION_TITLE, ANSWER_TITLE, DELETE_ANSWER, DELETE_QUESTION,
    REORDER_QUESTION, ADD_SCORE_2_ANSWER, DUPLICATE_QUESTIOIN, INSERT_QUESTION } from "../constants/QuestionActionTypes";
import {QUIZ_EXECUTE_QUESTION} from "../constants/Index";
import {mqzgetIndex} from "../util";
import {MC_MODEL, FB_MODEL, TX_MODEL, RT_MODEL, PH_MODEL, EM_MODEL, WS_MODEL, YN_MODEL, RD_MODEL, FU_MODEL} from "../constants/model";
import {Get_Question_Model} from "../constants/model";

const initialState = [
    
]

export default function reducer(state = initialState, action) {
    
    if (action.type == CHANGE_QUESTION) {

        
            let ddindex = action.payload.id - 1;
            let res = [...state];
            res[ddindex] = Object.assign({}, action.payload);            
            return res;

            // let ddindex = action.payload.id - 1;
            // console.log(action.payload);
            // if (ddindex >=0 ) {
            //     // let res = [
            //     //     ...state
            //     // ];
                

            //     // if (state[ddindex].type == "" && action.payload.type == "MC") {
            //     //     let res = [...state];
            //     //     res[ddindex] = Object.assign({}, MC_MODEL, action.payload);
            //     //     console.log(res);
            //     //     return res;
            //     // }

            //     state[ddindex] = action.payload;
            //     // console.log(state);
            //     return state;
            // }
        // }

        return state;
    } 
    if (action.type == QUIZ_EXECUTE_QUESTION) {
        if (typeof action.payload == "undefined")
            return state;
        
        let newstate = [...action.payload];
        return newstate;
    } else if (action.type == ADD_NEW_QUESTION) {
        action.payload.id = state.length + 1;

        // if (action.payload.type == "MC") {
            let res = [...state];
            // res[res.length] = Object.assign({}, Get_Question_Model(action.payload.type), action.payload);
            res[res.length] = Get_Question_Model(action.payload.type);
            res[res.length - 1].id = res.length;
            
            return res;
        // } else if (action.payload.type == "FB") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, FB_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // }
        // else if (action.payload.type == "TX") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, TX_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "RT") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, RT_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "PH") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, PH_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "EM") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, EM_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "WS") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, WS_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "YN") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, YN_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "RD") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, RD_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // } else if (action.payload.type == "FU") {
        //     let res = [...state];
        //     res[res.length] = Object.assign({}, FU_MODEL, action.payload);
        //     res[res.length - 1].id = res.length;
        //     return res;
        // }
        
        return [
            ...state, action.payload
        ];
    } else if (action.type == DELETE_QUESTION) {
        
        let ddindex = mqzgetIndex(action.payload.id, state, "id");
      
        if (ddindex >=0 ) {
            let res = [
                ...state.slice(0, ddindex),
                ...state.slice(ddindex+1)
            ];

            return res.map((i, index) => {
                i.id = index + 1;
                return i;
            });
        }

        
    } else if (action.type == DELETE_ANSWER) {
        let dstate = [...state]
        let qindex = action.payload.activeid;
        const caid = action.payload.id
        let answers =  state[qindex].answers
        
        dstate[qindex].answers = [
            ...answers.slice(0, caid),
            ...answers.slice(caid + 1)
        ];
        // console.log(dstate[qindex].answers)
        return dstate;
    } else if (action.type == ANSWER_TITLE) {
        let astate = [...state]
        let qindex = action.payload.activeid;        

        const currentAnswerid = action.payload.id

        astate[qindex].answers[currentAnswerid].title = action.payload.title;
        return astate;
    } else if (action.type == CHANGE_QUESTION_TITLE) {
        let qstate = [...state]
        let qindex = action.payload.activeid;

        qstate[qindex].title = action.payload.title

        return qstate;
    } else if (action.type == ADD_NEW_ANSWER) {
        let newstate = [...state]
        
        let qindex = action.payload;

        let question = newstate[qindex]
        newstate[qindex].answers.push({
            title: ""
        });
        return newstate;
    } else if (action.type == REORDER_QUESTION) {
        let start = action.payload.start;
        let end = action.payload.end;
        const result = [...state];
        const [removed] = result.splice(start, 1);
        result.splice(end, 0, removed);
        const newres = result.map((value, index) => {
            value.id = index + 1;
            return value;
        });
        
        return newres;
    } else if (action.type == ADD_SCORE_2_ANSWER) {
        const question_id = action.payload.activeid;
        const answer_id = action.payload.answerid;
        const val = action.payload.value;

        let newstate = [...state];
        newstate[question_id].answers[answer_id].score = val;
        return newstate;
    } else if (action.type == CHANGE_QUESTION_MULTI) {
        const question_id = action.payload.activeid;
        const val = action.payload.value;

        let newstate = [...state];
        newstate[question_id].multiple = val;
        return newstate;
    } else if (action.type == CHANGE_CORRECT_ANSWER ) {
        const question_id = action.payload.activeid;
        const val = action.payload.value;
        const answerid = action.payload.answerid;

        let newstate = [...state];
        newstate[question_id].answers[answerid].correct = val;
        return newstate;
    } else if (action.type == DUPLICATE_QUESTIOIN) {        
        let ddindex = mqzgetIndex(action.payload.id, state, "id");
        
        if (ddindex >=0 ) {
            const second = Object.assign({}, action.payload);
            const one = JSON.parse(JSON.stringify(second));//Object.assign({}, action.payload);
            let res = [
                ...state.slice(0, ddindex),
                one,
                second,
                ...state.slice(ddindex+1)
            ];
            
            const newres = res.map((value, index) => {
                value.id = index + 1;
                return value;
            });

            return newres;
        }
    } else if (action.type == INSERT_QUESTION) {

        const ddindex = action.payload.index;
        
        if (ddindex >=0 ) {
             
            let res = [
                ...state.slice(0, ddindex),
                Get_Question_Model(action.payload.type),            
                ...state.slice(ddindex)
            ];
            
            const newres = res.map((value, index) => {
                value.id = index + 1;
                return value;
            });


            return newres;
        }
    }
 
    return state;
}