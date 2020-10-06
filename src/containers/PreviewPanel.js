import React, { Component } from "react";
import PreviewPanel from "../components/PreviewPanel";
import {dispatchchangeQuestion, dispatchActivateQuestion} from "../actions/questionActions";
import { connect } from "react-redux";

export class Controller extends Component {
  render() {
    return (
        <PreviewPanel {...this.props} />
    )
  }
};

const mapStateToProps = store => {
  return {
    questions: store.questions,
    activate: store.activate     
  };
};

const mapDispatchToProps = dispatch => {
    return {    
        changeQuestion: (e) => {
          dispatch(dispatchchangeQuestion(e));
        },
        nextQuestion: (e) => {
          dispatch(dispatchActivateQuestion(e));
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
