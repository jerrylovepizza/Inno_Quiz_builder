// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { QUIZ_CHANGE_TITLE, QUIZ_CHANGE_START_BUTTON, QUIZ_CHANGE_DESCRIPTION, QUIZ_CHANGE_TYPE,QUIZ_CHANGE_IMAGE,
  QUIZ_CHANGE_BG_COLOR,QUIZ_CHANGE_FONT_COLOR, QUIZ_CHANGE_PROG_BAR_COLOR, QUIZ_CHANGE_BTN_COLOR, QUIZ_CHANGE_OPT_BG_COLOR, QUIZ_CHANGE_OPT_FONT_COLOR, QUIZ_CHANGE_OPT_SEL_COLOR
 } from "../constants/QuizActionTypes";

 import {CHANGE_FONT_COLOR, CHANGE_OPTION_COLOR, CHANGE_OPTION_FONT_COLOR, CHANGE_SEL_OPTION_COLOR, CHANGE_BTN_COLOR } from "../constants/styles";

export function quizChangeTitle(payload) {
  return {
    type: QUIZ_CHANGE_TITLE,
    payload: payload
  };
}

export function quizChangeStartButton(payload) {
    return {
        type: QUIZ_CHANGE_START_BUTTON,
        payload: payload
    }
}

export function quizChangeDescription(payload) {
    return {
        type: QUIZ_CHANGE_DESCRIPTION,
        payload: payload
    }
}

export function quizChangeType(payload) {
  
  return {
    type: QUIZ_CHANGE_TYPE,
    payload: payload
  }
}

export function quizchangeBgColor(payload) {
  return {
    type: QUIZ_CHANGE_BG_COLOR,
    payload: payload
  }
}

export function dispatchChangeImage(payload) {
  return  {
    type: QUIZ_CHANGE_IMAGE,
    payload: payload
  }
}

export function quizchangeFontColor(payload) {
  return {
    type: CHANGE_FONT_COLOR,
    payload: payload
  }
}

export function quizchangeOptionColor(payload) {
  return {
    type: CHANGE_OPTION_COLOR,
    payload: payload
  }
}

export function quizchangeOptionFontColor(payload) {
  return {
    type: CHANGE_OPTION_FONT_COLOR,
    payload: payload
  }
}

export function quizchangeSelOptionColor(payload) {
  return {
    type: CHANGE_SEL_OPTION_COLOR,
    payload: payload
  }
}

export function quizchangeBtnColor(payload) {
  return {
    type: CHANGE_BTN_COLOR,
    payload: payload
  }
}