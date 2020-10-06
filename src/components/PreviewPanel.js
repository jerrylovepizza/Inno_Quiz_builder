import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MC from "./Preview/MC";
import FB from "./Preview/FB";
import TX from "./Preview/TX";
import RT from "./Preview/RT";
import PH from "./Preview/PH";
import EM from "./Preview/EM";
import YN from "./Preview/YN";
import RD from "./Preview/RD";
import FU from "./Preview/FU";
import HF from "./Preview/HF";
import ProgressBar from "./Preview/ProgressBar";

class PreviewPanel extends Component {

    constructor(props) {
        super(props);
        let dindex = this.props.activate.id - 1;

        let q = this.props.questions.length > 0 ? this.props.questions[dindex] : {};

        this.state = {
            question: q
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.questions.length > 0) {
            let dindex = props.activate.id - 1;
            let q = props.questions[dindex];

            return {
                question: q
            }            
        }

        return {
            question: {}
        }
    }

    nextQuestion() {

        let next  = this.props.activate.id;
        if ( next == this.props.questions.length) {
            next = 0;
        }

        next += 1;        

        return this.props.nextQuestion({
            status: "",
            id: next,
        });
    }

    render() { 
        let Question = (<div class="pw-no-question">What would you like to ask?</div>);

        if (!this.state.question) {
            return (
                {Question}
            );
        }



        const question = this.state.question;

        switch (question.type) {
            case "MC":
                Question = (<MC question={question} changeQuestion={this.props.changeQuestion}></MC>);
                break;
            case "FB":
                Question = (<FB question={question} changeQuestion={this.props.changeQuestion}></FB>);
                break;
            case "TX":
                Question = (<TX question={question} changeQuestion={this.props.changeQuestion}></TX>);
                break;
            case "RT":
                Question = (<RT question={question} changeQuestion={this.props.changeQuestion}></RT>);
                break;
            case "PH":
                Question = (<PH question={question} changeQuestion={this.props.changeQuestion}></PH>);
                break;
            case "EM":
                Question = (<EM question={question} changeQuestion={this.props.changeQuestion}></EM>);
                break;
            case "WS":
                Question = (<EM question={question} changeQuestion={this.props.changeQuestion}></EM>);
                break;
            case "YN":
                Question = (<YN question={question} changeQuestion={this.props.changeQuestion}></YN>);
                break;
            case "RD":
                Question = (<RD question={question} changeQuestion={this.props.changeQuestion}></RD>);
                break;
            case "FU":
                Question = (<FU question={question} changeQuestion={this.props.changeQuestion}></FU>);
                break;
            case "HF":
                Question = (<HF question={question} changeQuestion={this.props.changeQuestion}></HF>);
                break;
        }

        const is_new = (this.props.questions.length > 0);
        return (
            <Fragment>
                <div class="suvry-wrapper">
                    {Question}

                    {
                        is_new ?
                        (<Fragment>
                            <div class="qs-footer">
                                <button class="qs-btn qs-btn-normal" onClick={(e) => {this.nextQuestion();}}>{question.btn_text}</button>
                            </div>

                            
                        </Fragment>)
                        :
                        (<Fragment></Fragment>)
                    }
                    
                </div>
                    {
                        is_new ?
                        (
                        <div class="qs-progress-container">
                            <ProgressBar activate={this.props.activate.id} total={this.props.questions.length}></ProgressBar>
                        </div>
                        ):
                        (<Fragment></Fragment>)
                    }
                
            </Fragment>
        )
    }
}

PreviewPanel.propTypes = {
    questions: PropTypes.array,
    activate: PropTypes.object,
    changeQuestion: PropTypes.func,
    nextQuestion: PropTypes.object,
};

export default PreviewPanel;
