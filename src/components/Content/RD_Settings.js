import React, { Component, Fragment  } from "react";
import PropTypes from "prop-types";
import {mqzgetIndex} from "../../util";


class RD_Settings extends Component {
    constructor(props) {
        super(props);


        // let q = this.props.questions[this.props.activate.id - 1];
        // //console.log(this.props.activate);
        // question = {
        //     question: q,
        //     btn_text : q.btn_text,           
        // }
    }

    changeRequiredAnswer() {
        let question = this.props.questions[this.props.activate.id - 1];
        let required = !question.required;
        
        question.required = required;

        // this.setState({
        //     question: q
        // });

        this.props.changeQuestion(question);
    }

    changeScored() {
        let question = this.props.questions[this.props.activate.id - 1];
        let scored_question = !question.scored_question;
        let q = question;
        q.scored_question = scored_question;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    changeBtnText(e) {
        let question = this.props.questions[this.props.activate.id - 1];
        let q = question;
        q.btn_text = e.target.value

        this.setState({
            question: q,
            btn_text: e.target.value
        });

        this.props.changeQuestion(q);
    }

    onExit() {
        this.props.activateQuestion({
            id: this.props.activate.id,
            status: ""
        });
    }

    changeScore(e) {

        let q = this.props.questions[this.props.activate.id - 1];
        q.score = e.target.value;

        // this.setState({
        //     question: Object.assign({}, q)
        // });

        this.props.changeQuestion(q);
    }

  render() {
      const question = this.props.questions[this.props.activate.id - 1];
    return (
        <Fragment>
            <div class="q-s-option">
                <label>Require Answer:</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.required} onChange={(e) => {this.changeRequiredAnswer()}} id="ck-rd-2"/>
                    <label for="ck-rd-2"></label>
                </div>
            </div>

            <div class="q-s-option 2-line">
                <label>Button Text</label>
                
                <div class="q-s2-area">
                    <div class="q-s2-option">
                        <input type="text" class="q-control" value={question.btn_text} onChange={(e) => {
                            this.changeBtnText(e)}}/>
                    </div>
                </div>
            </div>
            
            
            <div class="q-s-option">
                <label>Score Question</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.scored_question} onChange={(e) => {this.changeScored()}} id="ck-rd-4"/>
                    <label for="ck-rd-4"></label>
                </div>
            </div>
            {
            question.scored_question && 
                <div class="q-s-option">
                    <input type="text" class="q-control" value={question.score} onChange={(e) => {
                        this.changeScore(e)}}/>
                </div>
            }
            <div class="q-s-btn-area">
                <a class="s-btn s-blue" onClick={(e) => {this.onExit();}}>Done</a>
            </div>
            
        </Fragment>    
    )
  }
}

RD_Settings.propTypes = {
    questions: PropTypes.object,    
    changeQuestion: PropTypes.func, 
    activate: PropTypes.object,
    activateQuestion: PropTypes.func
};


export default RD_Settings;