import React, { Component, Fragment  } from "react";
import PropTypes from "prop-types";
import {mqzgetIndex} from "../../util";
import ImageLayout from "./ImageLayout";
import {Get_TypeName} from "../../constants/model";
import RSelect from "./RSelect";
import SRMember from "./SRMember";

class QSettings extends Component {
    constructor(props) {
        super(props);

        let q = this.props.questions[this.props.activate.id - 1];
        //console.log(this.props.activate);
        // this.state = {
        //     question: q,
        //     btn_text : q.btn_text,
        //     mul_answers: q.mul_answers,
        //     add_img: q.img_align ? true: false,
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

    changeImage() {
        // this.setState({
        //     is_image: !this.state.is_image
        // });
        let question = this.props.questions[this.props.activate.id - 1];

        let is_image = !question.is_image;
        let q = question;
        q.is_image = is_image;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    changeMul() {

        let question = this.props.questions[this.props.activate.id - 1];

        let mul_answer = !question.mul_answer;
        let q = question;
        q.mul_answer = mul_answer;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    changeScored() {
        let question = this.props.questions[this.props.activate.id - 1];
        let scored_question = !question.scored_question;
        let q = question;
        q.scored_question = scored_question;


        this.props.changeQuestion(q);
    }

    changeNumber(e) {
        
        let q = this.props.questions[this.props.activate.id - 1];        
        q.mul_answers = e.target.value
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

    addImage(e) {
        let question = this.props.questions[this.props.activate.id - 1];
        let add_img = !question.add_img;

        // this.setState({
        //     add_img: add_img      
        // });
        
        question.add_img = add_img;
        this.props.changeQuestion(question);
    }

    onExit() {
        this.props.activateQuestion({
            id: this.props.activate.id,
            status: ""
        });
    }

    adjustImage(item) {
        
        let q = this.props.questions[this.props.activate.id - 1];
        q.img_align = item.align;
        q.img = (item.img) ? item.img : q.img;

        // this.setState({
        //     question: Object.assign({}, q)
        // });

        this.props.changeQuestion(q);
    }

    rmember_info(e) {
        // let q = this.state.question;

        let q = this.props.questions[this.props.activate.id - 1];
        q.remember_info = e;
        q.title = q.title + `<img src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9ZM0 15.5C0 17.9853 2.01472 20 4.5 20C6.98528 20 9 17.9853 9 15.5C9 13.0147 6.98528 11 4.5 11C2.01472 11 0 13.0147 0 15.5ZM11 15.5C11 17.9853 13.0147 20 15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5ZM11 4.5C11 6.98528 13.0147 9 15.5 9C17.9853 9 20 6.98528 20 4.5C20 2.01472 17.9853 0 15.5 0C13.0147 0 11 2.01472 11 4.5ZM15.5 7C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2C14.1193 2 13 3.11929 13 4.5C13 5.88071 14.1193 7 15.5 7ZM7 4.5C7 5.88071 5.88071 7 4.5 7C3.11929 7 2 5.88071 2 4.5C2 3.11929 3.11929 2 4.5 2C5.88071 2 7 3.11929 7 4.5ZM15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18ZM7 15.5C7 16.8807 5.88071 18 4.5 18C3.11929 18 2 16.8807 2 15.5C2 14.1193 3.11929 13 4.5 13C5.88071 13 7 14.1193 7 15.5Z' fill='%23D14CDE'/%3E%3C/svg%3E" />`;

        // this.setState({
        //     question: Object.assign({}, q)
        // });

        this.props.changeQuestion(q);

    }

  render() {
    let question = this.props.questions[this.props.activate.id - 1];
    




    return (
        <Fragment>
            <div class="q-s-option">
                <label>Require Answer:</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.required} onChange={(e) => {this.changeRequiredAnswer()}} id="checkbox-2"/>
                    <label for="checkbox-2"></label>
                </div>
            </div>

            <div class="q-s-option align-items-center">
                <label>Remember Info</label>
                <div class="remembers_select">
                    <SRMember />
                </div>
            </div>
            
            <div class="q-s-option">
                <label>Image Answers:</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.is_image} onChange={(e) => {this.changeImage()}} id="checkbox-3"/>
                    <label for="checkbox-3"></label>
                </div>
            </div>

            <div class="q-s-option 2-line">
                <label>Multiple Answers</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.mul_answer} onChange={(e) => {this.changeMul()}} id="checkbox-5"/>
                    <label for="checkbox-5"></label>
                </div>
                <div class="q-s2-area">
                    <div class="q-s2-option">
                        <input type="number" disabled={!question.mul_answer} class="q-control" value={question.mul_answers} onChange={(e) => {
                            this.changeNumber(e)}}/>
                    </div>
                </div>
            </div>
            
            <div class="q-s-option">
                <label>Add Image:</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.add_img} onChange={(e) => {this.addImage()}} id="checkbox-13"/>
                    <label for="checkbox-13"></label>
                </div>
            </div>
            {
            question.add_img && 
            <div class="q-s-option">
                <ImageLayout img={question.img} value={question.img_align} change={(e) => {this.adjustImage(e); }}></ImageLayout>
            </div>
            }

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
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.scored_question} onChange={(e) => {this.changeScored()}} id="checkbox-4"/>
                    <label for="checkbox-4"></label>
                </div>
            </div>

            <div class="q-s-btn-area">
                <a class="s-btn s-blue" onClick={(e) => {this.onExit();}}>Done</a>
            </div>
            
        </Fragment>    
    )
  }
}

QSettings.propTypes = {
    questions: PropTypes.object,    
    changeQuestion: PropTypes.func, 
    activate: PropTypes.object,
    activateQuestion: PropTypes.func
};


export default QSettings;
