import {CHANGE_QUILL_EDITOR} from "../constants/quill";

export function dispatchChangeQuill(e) {
    return {
        type: CHANGE_QUILL_EDITOR,
        payload: e
    }
}