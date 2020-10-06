import React, { Component, Fragment,PureComponent  } from "react";
import PropTypes from "prop-types";
import {YN_MODEL} from "../../constants/model";
import EditBox from "./EditBox";

class YN_Question extends PureComponent {

    constructor(props) {
        super(props);
       // 
      //  let gindex = mqzgetIndex(this.props.question.type, QUESTION_TYPES, "value");
        
        this.state = {           
            question: this.props.question
        }
    }

    changeTitle(e, index) {
        let q = this.state.question;        
        q.answers[index]  = e;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    render() {

        const is_edit = (this.props.activate &&  this.props.activate.status == "edit");

        const is_image = !this.state.question.is_image;
        
        let answers = this.state.question.answers.map((val, index) => (
            <div class="q-section" key={`q-answer-${index}`} index={index}>
                <div class="q-icon">
                    { is_edit &&
                    (<div class="q-sharp">
                    </div>)
                    }
                </div>

                <div class="q-answer">
                    <span class="q-a-pre">-</span>
                    {/* {is_image || 
                    (<span class="q-a-img">
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0.166748H20.5C21.7426 0.166748 22.75 1.1368 22.75 2.33341V19.6667C22.75 20.8634 21.7426 21.8334 20.5 21.8334H2.5C1.25736 21.8334 0.25 20.8634 0.25 19.6667V2.33341C0.25 1.1368 1.25736 0.166748 2.5 0.166748ZM2.5 2.33341V14.8847L7.00001 10.5514L10.9375 14.343L18.25 7.30137L20.5 9.46803V2.33341H2.5ZM2.5 19.6667V17.9488L7.00001 13.6155L13.284 19.6667H2.5ZM20.5 19.6667H16.466L12.5285 15.8751L18.25 10.3655L20.5 12.5322V19.6667ZM13.75 6.66675C13.75 4.87182 12.239 3.41675 10.375 3.41675C8.51104 3.41675 7 4.87182 7 6.66675C7 8.46167 8.51104 9.91675 10.375 9.91675C12.239 9.91675 13.75 8.46167 13.75 6.66675ZM9.25 6.66675C9.25 6.06844 9.75368 5.58341 10.375 5.58341C10.9963 5.58341 11.5 6.06844 11.5 6.66675C11.5 7.26506 10.9963 7.75008 10.375 7.75008C9.75368 7.75008 9.25 7.26506 9.25 6.66675Z" fill="#32373C"/>
                        </svg>
                    </span>)
                    } */}
                    <span class="q-a-title">
                        <EditBox text={val} key={`q-a-title-${index}`} className="q-control" change={(e) => {this.changeTitle(e, index);}}/>
                    </span>                   
                </div>
            </div>
        ));
        

        return (
            <Fragment>
                <div class="question-content yn-content">
                    
                    {answers}
                    {is_edit &&
                    <div class="q-section">
                        <div class="q-add-answer" onClick={(e) => {this.addAnswer();}}>
                            <div class="q-a-icon">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 16.5C4.56865 16.5 0.875 12.8063 0.875 8.25C0.875 3.69365 4.56865 0 9.125 0C13.6813 0 17.375 3.69365 17.375 8.25C17.375 12.8063 13.6813 16.5 9.125 16.5ZM9.125 15C12.8529 15 15.875 11.9779 15.875 8.25C15.875 4.52208 12.8529 1.5 9.125 1.5C5.39708 1.5 2.375 4.52208 2.375 8.25C2.375 11.9779 5.39708 15 9.125 15ZM12.875 7.5H9.875V4.5H8.375V7.5H5.375V9H8.375V12H9.875V9H12.875V7.5Z" fill="#DADADA"/>
                                </svg>
                            </div>                           
                            <span>answer</span>                            
                        </div>
                    </div>
                    }                    
                </div>
            </Fragment>
        )

    }
}

YN_Question.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func,
    addQuestion: PropTypes.func,    
    activate: PropTypes.object,
};

export default YN_Question;
