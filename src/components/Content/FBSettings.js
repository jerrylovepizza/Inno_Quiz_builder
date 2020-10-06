import React, { Component, Fragment  } from "react";
import PropTypes from "prop-types";
import {mqzgetIndex} from "../../util";
import ImageLayout from "./ImageLayout";
import LogoLayout from "./LogoLayout";

class FBSettings extends Component {
    constructor(props) {
        super(props);


        let q = this.props.questions[this.props.activate.id - 1];
        //console.log(this.props.activate);
        // this.state = {
        //     question: q,
        //     is_logo: q.logo ? true: false,
        //     add_img: q.img_align ? true: false,
        //     btn_text: q.btn_text
        // }
    }

    changeLogo() {
        // this.setState({
        //     is_image: !this.state.is_image
        // });
        let q = this.props.questions[this.props.activate.id - 1];
        let is_logo = !q.is_logo;
        
        q.is_logo = is_logo;

        // this.setState({
        //     question: Object.assign({}, q),
        //     is_logo: is_logo
        // });

        this.props.changeQuestion(q);
    }


    changeBtnText(e) {

        let q = this.props.questions[this.props.activate.id - 1];
        q.btn_text = e.target.value

        // this.setState({
        //     question: q,
        //     btn_text: e.target.value
        // });

        this.props.changeQuestion(q);
    }

    addImage(e) {
        let q = this.props.questions[this.props.activate.id - 1];
        let add_img = !q.add_img;

        // this.setState({
        //     add_img: add_img      
        // });
        
        q.add_img = add_img;
        this.props.changeQuestion(q);
    }

    onExit() {
        this.props.activateQuestion({
            id: this.props.activate.id,
            status: ""
        });
    }

    adjustImage(item) {
        
        let q =  this.props.questions[this.props.activate.id - 1];
        q.img_align = item.align;
        q.img = (item.img) ? item.img : q.img;

        // this.setState({
        //     question: Object.assign({}, q)
        // });

        this.props.changeQuestion(q);
    }

    adjustLogo(item) {
        let q = this.props.questions[this.props.activate.id - 1];
        q.logo_align = item.align;
        q.logo = item.img;

        
        this.props.changeQuestion(q);
    }

    changeSocial() {
        let q =  this.props.questions[this.props.activate.id - 1];
        q.social = !q.social;
        

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
                <label>Add Logo</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.is_logo} onChange={(e) => {this.changeLogo()}} id="chk-fb-logo-1"/>
                    <label for="chk-fb-logo-1"></label>
                </div>
            </div>
            
            {
            question.is_logo && 
            <div class="q-s-option">
                <LogoLayout img={question.logo} value={question.logo_align} change={(e) => {this.adjustLogo(e); }}>
                </LogoLayout>
            </div>
            }

            <div class="q-s-option">
                <label>Add Image:</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.add_img} onChange={(e) => {this.addImage()}} id="checkbox-fb-13"/>
                    <label for="checkbox-fb-13"></label>
                </div>
            </div>
            {
            question.add_img && 
            <div class="q-s-option">
                <ImageLayout img={question.img} value={question.img_align} change={(e) => {this.adjustImage(e); }}>
                </ImageLayout>
            </div>
            }

            <div class="q-s-option">
                <label>Add Social Image</label>
                <div class="q-s-checkbox">
                    <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={question.social} onChange={(e) => {this.changeSocial()}} id="chk-fb-social-1"/>
                    <label for="chk-fb-social-1"></label>
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
            
            
            <div class="q-s-btn-area">
                <a class="s-btn s-blue" onClick={(e) => {this.onExit();}}>Done</a>
            </div>
            
        </Fragment>    
    )
  }
}

FBSettings.propTypes = {
    questions: PropTypes.object,    
    changeQuestion: PropTypes.func, 
    activate: PropTypes.object,
    activateQuestion: PropTypes.func
};


export default FBSettings;
