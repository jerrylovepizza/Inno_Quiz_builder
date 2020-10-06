import React, { Component } from "react";
import { connect } from "react-redux";
import ResultPanel from "../components/ResultPanel";
import {dispatchChangeResult} from "../actions/result";
import { dispatchAddRule, dispatchDeleteRule, dispatchChangeRule, dispatchChangeRedirect } from "../actions/rule";

export class Controller extends Component {

  render() {
    return (
        <div class="result-container">
            <div class="results-wrapper">
                <ResultPanel {...this.props}/>
            </div>
        </div>
    )
  }

};

export const mapStateToProps = store => {
  return {
    result: store.result,
    rule: store.rule,
    questions: store.questions,
  };
};

export const mapDispatchToProps = dispatch => {
    return {
        changeResult: (e) => {         
            dispatch(dispatchChangeResult(e));
        },
        addRule: (e) => {
          dispatch(dispatchAddRule(e));
        },
        deleteRule: (e) => {
          dispatch(dispatchDeleteRule(e));
          //dispatch(dispat)
        }, 
        changeRule: (e) => {
          dispatch(dispatchChangeRule(e));
        },
        changeRedirect: (e) => {
          dispatch(dispatchChangeRedirect(e));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
