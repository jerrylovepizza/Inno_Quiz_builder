import { ADD_RULE, DELETE_RULE, CHANGE_RULE, CHANGE_REDIRECT } from "../constants/rule";

export function dispatchAddRule(payload) {
  return {
    type: ADD_RULE,
    payload: payload
  };
}

export function dispatchDeleteRule (payload) {
return {
    type: DELETE_RULE,
    payload: payload
  };
}

export function dispatchChangeRule(payload) {
	return {
		type: CHANGE_RULE,
		payload: payload
	}
}

export function dispatchChangeRedirect(payload) {
	return {
		type : CHANGE_REDIRECT,
		payload: payload
	}
}