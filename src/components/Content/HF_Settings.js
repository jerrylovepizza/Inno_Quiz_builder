import React, { Component, Fragment  } from "react";
import PropTypes from "prop-types";
import {mqzgetIndex} from "../../util";
import ImageLayout from "./ImageLayout";

class HF_Settings extends Component {
    constructor(props) {
        super(props);

    }


    changeText(e) {
        let question = this.props.questions[this.props.activate.id - 1];
        let q = question;
        q.key = e.target.value

        this.props.changeQuestion(q);
    }



    onExit() {
        this.props.activateQuestion({
            id: this.props.activate.id,
            status: ""
        });
    }


  render() {
      const question = this.props.questions[this.props.activate.id - 1];
    return (
        <Fragment>
            
            <div class="q-s-option 2-line">
                <label>Value</label>
                
                <div class="q-s2-area">
                    <div class="q-s2-option">
                        <input type="text" class="q-control" value={question.key} onChange={(e) => {
                            this.changeText(e)}}/>
                    </div>
                </div>
            </div>
    
            <div class="q-s-btn-area">
                <a class="s-btn s-blue" onClick={(e) => {this.onExit();}}>Done</a>
            </div>
            
        </Fragment>    
    )
  }
}

HF_Settings.propTypes = {
    questions: PropTypes.object,    
    changeQuestion: PropTypes.func, 
    activate: PropTypes.object,
    activateQuestion: PropTypes.func
};


export default HF_Settings;