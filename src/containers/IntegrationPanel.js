import React, { Component } from "react";
import { connect } from "react-redux";
import IntegrationPanel from "../components/IntegrationPanel";
import {readMailer, dispatchAddMailer, dispatchDeleteMailer, dispatchChangeMailer} from "../actions/index";

export class Controller extends Component {

  render() {
    return (
        <div id="integration-container">            
            <IntegrationPanel {...this.props}/>            
        </div>
    )
  }

};

export const mapStateToProps = store => {
  return {
    mailer: store.mailer,
    questions: store.questions,
  };
};

export const mapDispatchToProps = dispatch => {
    return {
        changeMailer: (e) => {            
            dispatch(dispatchChangeMailer(e));
        },
        addMailer: (e) => {
            dispatch(dispatchAddMailer(e));
        },
        deleteMailer: (e) => {
            dispatch(dispatchDeleteMailer(e));
        },
        readField: (e) => {
            dispatch(readMailer(e));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
