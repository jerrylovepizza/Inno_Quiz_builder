import React, { Component, Fragment  } from "react";
import PropTypes from "prop-types";
import {mqzgetIndex} from "../../util";
import ImageLayout from "./ImageLayout";
import RSelect from "./RSelect";
import {country_codes} from "./../../constants/Country";

const phone_list = country_codes.map((value) => {
    return { [value.name] : value.dial_code };
});

class PH_Settings extends Component {
    constructor(props) {
        super(props);


        let q = this.props.questions[this.props.activate.id - 1];
        //console.log(this.props.activate);
        // question = {
        //     question: q,
        //     btn_text : q.btn_text,            
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
        //     is_image: !question.is_image
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

    changeScore(e) {

        let q = this.props.questions[this.props.activate.id - 1];
        q.score = e.target.value;

        // this.setState({
        //     question: Object.assign({}, q)
        // });

        this.props.changeQuestion(q);
    }

    phone_code(e) {
        let q = this.props.questions[this.props.activate.id - 1];
        q.country_code = e;

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
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.required} onChange={(e) => {this.changeRequiredAnswer()}} id="ck-ph-2"/>
                    <label for="ck-ph-2"></label>
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
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.scored_question} onChange={(e) => {this.changeScored()}} id="ck-ph-4"/>
                    <label for="ck-ph-4"></label>
                </div>
            </div>
            {
            question.scored_question && 
                <div class="q-s-option">
                    <input type="text" class="q-control" value={question.score} onChange={(e) => {
                        this.changeScore(e)}}/>
                </div>
            }

            
            <div class="q-s-option align-items-center">
                <label>Add Country  Code</label>
                <div class="phone_code">
                <RSelect options={phone_list} onChange={(e) => {this.phone_code(e);}} value={question.country_code} id='select1' />
                </div>
            </div>
            
            <div class="q-s-option">
                <label>Add Icon:</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.add_img} onChange={(e) => {this.addImage()}} id="ck-ph-13"/>
                    <label for="ck-ph-13"></label>
                </div>
            </div>
            {
            question.add_img && 
            <div class="q-s-option">
                <ImageLayout img={question.img} value={question.img_align} change={(e) => {this.adjustImage(e); }}></ImageLayout>
            </div>
            }

            
            <div class="q-s-btn-area">
                <a class="s-btn s-blue" onClick={(e) => {this.onExit();}}>Done</a>
            </div>
            
        </Fragment>    
    )
  }
}

PH_Settings.propTypes = {
    questions: PropTypes.object,    
    changeQuestion: PropTypes.func, 
    activate: PropTypes.object,
    activateQuestion: PropTypes.func
};


export default PH_Settings;