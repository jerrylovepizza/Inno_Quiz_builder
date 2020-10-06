// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html
import {QUIZ_CHANGE_TITLE, QUIZ_CHANGE_START_BUTTON, QUIZ_CHANGE_DESCRIPTION, QUIZ_CHANGE_TYPE, QUIZ_CHANGE_BG_COLOR,QUIZ_CHANGE_IMAGE} from "../constants/QuizActionTypes";
import {QUIZ_SCORE_TYPE, QUIZ_ASSISTANCE_TYPE, QUIZ_EXECUTE_QUIZ} from "../constants/Index";
import {CHANGE_FONT_COLOR, CHANGE_OPTION_FONT_COLOR,  CHANGE_SEL_OPTION_COLOR, CHANGE_OPTION_COLOR, CHANGE_BTN_COLOR } from "../constants/styles";

export default function reducer(state =  "New Quiz Name" 
  , action) {
    
  switch (action.type) {
    case QUIZ_CHANGE_TITLE:
      const newstate = action.payload;
      return newstate;
    break;

    case QUIZ_EXECUTE_QUIZ:
      if (typeof action.payload == "undefined") {
        return state;
      }
      return action.payload;
      break;
    
  //   case QUIZ_CHANGE_START_BUTTON:
  //       const buttonstate =  Object.assign({}, state, {
  //         button: action.payload
  //       });
        
  //       return buttonstate;
  //       break;
  //   case QUIZ_CHANGE_DESCRIPTION:
  //       const description =  Object.assign({}, state, {
  //           description: action.payload
  //         }); 
  //         return description;
  //       break;
  // case QUIZ_CHANGE_TYPE:
  //   const type = Object.assign({}, state, {
  //     type: action.payload
  //   });

  //   return type;
  //   break;
  // case QUIZ_CHANGE_BG_COLOR:
    
  //   const bg_color = Object.assign({}, state, {
  //     background_color: action.payload
  //   });

  //   return bg_color;
  //   break;
  // case QUIZ_CHANGE_IMAGE:
  //   const q_img = Object.assign({}, state, {
  //     image: action.payload
  //   });
  //   return q_img;
  //   break;

  //  case CHANGE_FONT_COLOR:
  //    const font_color = Object.assign({}, state, {
  //     font_color: action.payload
  //    });
  //    return font_color;
  //    break;
  

  // case CHANGE_OPTION_COLOR:
  //   const opt_color = Object.assign({}, state, {
  //     option_bg_color: action.payload
  //   });
  //   return opt_color;    
  //   break;
  // case CHANGE_OPTION_FONT_COLOR:
  //   const opt_font_color = Object.assign({}, state, {
  //     option_font_color: action.payload
  //   });
  //   return opt_font_color;
  //   break;
  // case CHANGE_SEL_OPTION_COLOR:
  //   const opt_sel_color = Object.assign({}, state, {
  //     option_sel_color: action.payload
  //   });
  //   return opt_sel_color;
  //   break;
  //   case CHANGE_BTN_COLOR:
  //   const btn_color = Object.assign({}, state, {
  //     btn_color: action.payload
  //   });
  //   return btn_color;
  //   break;
    
  }
  return state;
}