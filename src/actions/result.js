import { CHANGE_RESULT } from "../constants/result";

export function dispatchChangeResult(payload) {
  return {
    type: CHANGE_RESULT,
    payload: payload
  };
}