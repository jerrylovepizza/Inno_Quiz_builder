export const QUIZ_ASSISTANCE_TYPE = "Assistance";
export const QUIZ_SCORE_TYPE = "Score";
export const QUIZ_EXECUTE_QUESTION = "QUIZ_EXECUTE_QUESTION";
export const QUIZ_EXECUTE_QUIZ = "QUIZ_EXECUTE_QUIZ";
export const QUIZ_LOADING = "QUIZ_LOADING";
export const READ_MAILER_FIELDS = "READ_MAILER_FIELDS";
export const READ_MATCHED_FIELDS = "READ_MATCHED_FIELDS";

export const ADD_MAILER = "ADD_MAILER";
export const DELETE_MAILER = "DELETE_MAILER";
export const CHANGE_MAILER = "CHANGE_MAILER";

export const HELP = "QUIZ_HELP";

export const CHANGE_OPTIONS = "CHANGE_OPTIONS";

export const CHANGE_REMEMBER = "CHANGE_REMEMBER";

export const getCaretPosition = function() {
    if (window.getSelection && window.getSelection().getRangeAt) {
      var range = window.getSelection().getRangeAt(0);
      var selectedObj = window.getSelection();
      
      var rangeCount = 0;
      var childNodes = selectedObj.anchorNode.parentNode.childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i] == selectedObj.anchorNode) {
          break;
        }
        if (childNodes[i].outerHTML)
          rangeCount += childNodes[i].outerHTML.length;
        else if (childNodes[i].nodeType == 3) {
          rangeCount += childNodes[i].textContent.length;
        }
      }
      return range.startOffset + rangeCount;
    }
    return -1;
}
