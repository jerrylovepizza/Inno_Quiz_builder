import React, { Component, Fragment,PureComponent  } from "react";
import PropTypes from "prop-types";
import {QUESTION_TYPES} from "./QuestionType";
import {mqzgetIndex, range} from "../../util";
import EditBox from "./EditBox";
import REditBox from "./REditBox";
import ContentEditable from "react-contenteditable";

import Select, { components }  from "react-select";

import MC_Question from "./MC_Question";

import {  Get_Question_Model } from "../../constants/model";
import YN_Question from "./YN_Question";
import RD_Question from "./RD_Question";
import QPopup from "./QPopup";


const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: "transparent", border: 0, boxShadow: "none", "&:hover": {borderColor: "transparent"} }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        
      return {
        ...styles        
      };
    },    
  };

const DropdownIndicator = props => {
return (
    <components.DropdownIndicator {...props}>
        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.84238 7L14.8818 0H0.802979L7.84238 7Z" fill="#32373C"/>
</svg>
    </components.DropdownIndicator>
);
};


class NewQuestion extends PureComponent {
    constructor(props) {
      super(props);
        
      let gindex = mqzgetIndex(this.props.question.type, QUESTION_TYPES, "value");
      
      this.state = {           
          new_question_type: (gindex == -1) ? "" : QUESTION_TYPES[gindex],
          menuIsOpen: false,
          id: this.props.question.id,
          title: this.props.question.title,
          description: this.props.question.description,
          is_des: this.props.question.description ? true: false,          
        }     
    }


    static getDerivedStateFromProps(props, state) {
        if (props.question.title != state.title) {            
            return {
                title: props.question.title
            }
        }

        return null;
    }

    componentDidMount() {
        //window.scrollTo(0, 0);
    }
    
    handleChange (selvalue) {
        if (selvalue) {
            if (this.state.new_question_type != "") {
                this.setState({new_question_type: selvalue});
                
                let question = this.props.question;

                if (question.type != selvalue.value) {
                    question = Get_Question_Model(selvalue.value);
                    
                    question.id = this.props.question.id;
                    question.title = this.props.question.title;
                    question.description = this.props.question.description;

                }

                //question.type = selvalue.value;
                this.props.changeQuestion(question);

            } else {
                this.setState({new_question_type: selvalue});
                let question = this.props.question;
                question.type = selvalue.value;

                this.props.addQuestion(question);
                
            }
            
        }
    }
   
    openModal(did) {
        this.setState({
            visible : true,
            delete_id: did
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }

    // deleteQuestion() {

    //     if (this.state.delete_id >= 0) {
    //         console.log(this.delete_id);
    //         if (this.state.question_id == this.props.questions.length - 1 ) {
    //             this.quiz_expand(this.state.question_id - 1);
    //         }
    //         this.props.deleteQuestion(this.state.delete_id);
            
    //         this.setState({delete_id: -1});
    //     }

    //     this.closeModal();
    // }

    changeTitle(e) {
        this.setState({title: e});

        let q = this.props.question;
        q.title = e;

        this.props.changeQuestion(q);
    }

    addQuestion(e) {
              
            // this.setState({menuIsOpen: true});
            const seltype = this.refs.seltype;
            seltype.onMenuOpen();
       
    }

    changeDescription(e) {
        this.setState({description: e});

        let q = this.props.question;
        q.description = e;

        this.props.changeQuestion(q);
    }

    onEnableDescription(e) {
        this.setState({is_des: true});
    }

  render() {
    let Qcontent = "";
    let question = "";
    if (this.props.question.type == "") {
        question = (
                <div class="q-icon-section" onClick={(e)=> {this.addQuestion(e);}}>
                    <div class="q-icon">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29644 16.5C3.71444 16.5 0 12.8063 0 8.25C0 3.69365 3.71444 0 8.29644 0C12.8784 0 16.5929 3.69365 16.5929 8.25C16.5929 12.8063 12.8784 16.5 8.29644 16.5ZM8.29643 15C12.0453 15 15.0844 11.9779 15.0844 8.25C15.0844 4.52208 12.0453 1.5 8.29643 1.5C4.54753 1.5 1.50844 4.52208 1.50844 8.25C1.50844 11.9779 4.54753 15 8.29643 15ZM12.0675 7.5H9.05065V4.5H7.54221V7.5H4.52532V9H7.54221V12H9.05065V9H12.0675V7.5Z" fill="#32373C"/>
                    </svg>
                    </div>
                    <span class="q-text">New Question</span>
                    <div class="select-container">
                        <Select ref='seltype' options={QUESTION_TYPES} 
                        styles={colourStyles}
                        onChange={(e) => {this.handleChange(e)}}
                        components={{DropdownIndicator, IndicatorSeparator: () => null}}
                        isClearable
                        isSearchable={false}
                        // menuIsOpen={this.state.menuIsOpen}
                        />
                    </div>                      
                </div>
        );
    } else {
        
        const activate = this.props.activate;
        const is_des = this.state.is_des;
        const nodes = this.props.question.description ? true: false;

        if (this.props.question.type == "MC") {
            Qcontent = (
                <MC_Question question={this.props.question} activate={this.props.activate} addQuestion={this.props.addquestion} changeQuestion={this.props.changeQuestion }></MC_Question>
            );
        } else if (this.props.question.type == "RT") {
            //console.log(this.props.question.scale);
            

            const rates =  range(this.props.question.scale).map((val) => (
                <div class="q-section" key={`q-rt-${val}-${val}`} val={val}>
                    <div class="q-icon">
                        <div class="q-sharp">
                        </div>                        
                    </div>
    
                    <div class="q-answer">
                        <span class="q-a-pre">-</span>                        
                        <span class="q-a-title">
                            {val + 1}
                        </span>
                    </div>
                </div>
            ));
            Qcontent = (
                <div class="question-content">
                    {rates}                    
                </div>
            );
        } else if (this.props.question.type == "YN") {            

            Qcontent = (
                <YN_Question question={this.props.question} activate={this.props.activate} addQuestion={this.props.addquestion} changeQuestion={this.props.changeQuestion }></YN_Question>                
            );
        } else if (this.props.question.type == "RD") {
            Qcontent = (
                <RD_Question question={this.props.question} activate={this.props.activate} addQuestion={this.props.addquestion} changeQuestion={this.props.changeQuestion }></RD_Question>                
            );
        }

        if (activate && activate.status == "edit") {
                     
            const Content = (
                <div className={"qt-" + this.props.question.type + " question-content"}>
                    <div class="q-section">
                        <span class="q-id">{this.state.id}</span>
                        <div class="q-title">
                            {/* <EditBox text={this.props.question.title} className="q-control" change={(e) => {this.changeTitle(e);}}/> */}
                            <REditBox              
                            text={this.props.question.title}       
                            change={(evt) => {this.changeTitle(evt);}}                            
                            className="q-control q-rich-editor"
                            q_id = {this.props.question.id}
                            />
                            {/* <input type="text" class="q-control" value={this.state.title} placeholder="Question Title" onChange={(e)=> {this.changeTitle(e);}} /> */}
                        </div>
                    </div>

                    <div class="q-section">
                        {
                            is_des ? ( 
                                <div class="q-description">
                                    <EditBox text={this.props.question.description} className="q-control" change={(e) => {this.changeDescription(e);}}/>
                                </div>
                            ) :  (
                                <div class="q-description" onClick={(e) => {this.onEnableDescription(e); }}>
                                    <div class="q-d-icon">
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 17.25C3.69365 17.25 0 13.5563 0 9C0 4.44365 3.69365 0.75 8.25 0.75C12.8063 0.75 16.5 4.44365 16.5 9C16.5 13.5563 12.8063 17.25 8.25 17.25ZM8.25 15.75C11.9779 15.75 15 12.7279 15 9C15 5.27208 11.9779 2.25 8.25 2.25C4.52208 2.25 1.5 5.27208 1.5 9C1.5 12.7279 4.52208 15.75 8.25 15.75ZM12 8.25H9V5.25H7.5V8.25H4.5V9.75H7.5V12.75H9V9.75H12V8.25Z" fill="#DADADA"/>
                                        </svg>
                                    </div>
                                    <span>Additional descriptive text</span>                            
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            );
            

            question = (
                <Fragment>
                <div className={" q-icon-section e-question"}>
                    <div class="q-icon">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7525 1.91675C16.3799 1.91675 16.9814 2.16728 17.4207 2.61003L20.3924 5.58172C20.8348 6.02416 21.0834 6.62424 21.0834 7.24995C21.0834 7.87566 20.8348 8.47573 20.3924 8.91817L9.54263 19.7645C8.87325 20.5367 7.92438 21.0111 6.83735 21.0856H1.91669V20.1273L1.9198 16.0879C2.00144 15.0774 2.47124 14.1377 3.18791 13.5063L14.0831 2.61118C14.5249 2.16671 15.1257 1.91675 15.7525 1.91675ZM6.76967 19.1714C7.28164 19.1351 7.7582 18.8969 8.14086 18.4591L15.3878 11.2122L11.7898 7.61416L4.50045 14.9018C4.11218 15.2452 3.87198 15.7256 3.83335 16.1651V19.1696L6.76967 19.1714ZM13.1453 6.25903L16.743 9.85695L19.0371 7.56289C19.1201 7.47989 19.1667 7.36732 19.1667 7.24995C19.1667 7.13258 19.1201 7.02001 19.0371 6.93701L16.0628 3.96265C15.9807 3.87994 15.869 3.83341 15.7525 3.83341C15.636 3.83341 15.5243 3.87994 15.4422 3.96265L13.1453 6.25903Z" fill="#32373C"/>
    </svg>
                    </div>                
                    <div class="select-container">
                        <Select ref='seltype' options={QUESTION_TYPES} 
                        styles={colourStyles}
                        onChange={(e) => {this.handleChange(e)}}
                        components={{DropdownIndicator, IndicatorSeparator: () => null, ClearIndicator: () => null,}}
                        isClearable
                        isSearchable={false}
                        value = {this.state.new_question_type}
                        
                        // menuIsOpen={this.state.menuIsOpen}
                        />
                    </div>
                </div>
                {Content}
             </Fragment>
            );
        } else {
            // const Content = (
            //     <div class="question-content">                                      
            //     </div>
            // );

            question = (
                <Fragment>
                    <div className={" q-icon-section e-question "} >                  
                        <div class="q-section">
                            <span className={"q-id in-icon in-icon" + this.props.question.type }>{this.state.id}</span>
                            <div class="q-title">
                                <EditBox text={this.state.title} placeholder={"Question Title"} className="q-control" change={(e) => {this.changeTitle(e);}}/>
                                {/* { <input type="text" class="q-control" value={this.state.title} placeholder="Question Title" onChange={(e)=> {this.changeTitle(e);}} />} */}
                            </div>    
                        </div>
                    </div>

                    
                    <div class="q-section">                       
                        <div class="q-description">
                            <EditBox text={this.state.description} placeholder={"Description of Question"} className="q-control" change={(e) => {this.changeDescription(e);}}/>
                        </div>
                    </div>
                </Fragment>
            );
        }
        
    }

    return (
        <Fragment>
            {question}
            {Qcontent}
        </Fragment>
    )
  }

}

NewQuestion.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func,
    addQuestion: PropTypes.func,    
    activate: PropTypes.object
};


export default NewQuestion;
