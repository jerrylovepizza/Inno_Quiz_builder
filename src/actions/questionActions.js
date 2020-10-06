// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { CHANGE_QUESTION, CHANGE_QUESTION_MULTI, ADD_NEW_QUESTION, ACTIVATE_QUESTION, ADD_NEW_ANSWER, ANSWER_TITLE, CHANGE_QUESTION_TITLE, DELETE_ANSWER, DELETE_QUESTION, REORDER_QUESTION, ADD_SCORE_2_ANSWER, CHANGE_CORRECT_ANSWER, DUPLICATE_QUESTIOIN, INSERT_QUESTION } from "../constants/QuestionActionTypes";

export function dispathaddQuestion(payload) {
  return {
    type: ADD_NEW_QUESTION,
    payload: payload
  };
}

export function dispatchActivateQuestion(payload) {
    return {
        type: ACTIVATE_QUESTION,
        payload: payload
    }
}

export function dispatchAddAnswer(payload) {
    return {
        type: ADD_NEW_ANSWER,
        payload: payload
    }
}

export function dispatchChangeAnswerTitle(payload) {
  return {
    type: ANSWER_TITLE,
    payload: payload
  }
}

export function dispatchChangeQuestionTitle(payload) {
  return {
    type: CHANGE_QUESTION_TITLE,
    payload: payload
  }
}

export function dispatchDeleteAnswer(payload) {
  return {
    type: DELETE_ANSWER,
    payload: payload
  }
}

export function dispatchDeleteQuestion(payload) {
  return {
    type: DELETE_QUESTION,
    payload: payload
  }
}

export function dispatchReorderQuestion(payload) {
  return {
    type: REORDER_QUESTION,
    payload: payload
  }
}

export function dispatchAddScoreToAnswer(payload) {
  return {
    type: ADD_SCORE_2_ANSWER,
    payload: payload
  }
}

export function dispatchChangeMulti(payload) {
  return {
    type: CHANGE_QUESTION_MULTI,
    payload: payload
  }
}

export function dispatchChangeCorrect(payload) {
  return {
    type: CHANGE_CORRECT_ANSWER,
    payload: payload
  }
}

export function dispatchchangeQuestion(payload) {
  return {
    type: CHANGE_QUESTION,
    payload: payload
  }
}

export function dispatchDuplicateQuestion(payload) {
  return {
    type: DUPLICATE_QUESTIOIN,
    payload: payload
  }
}

export function dispatchInsertQuestion(payload) {
  return {
    type: INSERT_QUESTION,
    payload: payload
  }
}