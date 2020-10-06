import React, { Component } from "react";
import QuestionsPanel from "../components/QuestionsPanel";
import {dispathaddQuestion, dispatchActivateQuestion, dispatchDeleteQuestion, dispatchReorderQuestion, dispatchchangeQuestion, dispatchDuplicateQuestion } from "../actions/questionActions";

import { connect } from "react-redux";

export class Controller extends Component {

  render() {
    return (
        <QuestionsPanel {...this.props}/>
    )
  }
};

const mapStateToProps = store => {
  return {
    quiz: store.quiz,
    questions: store.questions,
    activate: store.activate,
    help: store.help,    
  };
};

const mapDispatchToProps = dispatch => {
    return {
        addquestion: (e) => {            
            dispatch(dispathaddQuestion(e));            
        },
        activateQuestion: (e) => {
          dispatch(dispatchActivateQuestion(e));
        },
        deleteQuestion: (e) => {
          dispatch(dispatchDeleteQuestion(e));
        },
        changeQuestion: (e) => {
          dispatch(dispatchchangeQuestion(e));
        },

        reorderQuestion: (e) => {
          dispatch(dispatchReorderQuestion(e));
        },
        duplicateQuestion: (e) => {
          dispatch(dispatchDuplicateQuestion(e));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
