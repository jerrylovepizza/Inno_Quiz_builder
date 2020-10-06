import React, { Component, Fragment,PureComponent  } from "react";
import PropTypes from "prop-types";
import {QUESTION_TYPES} from "./QuestionType";
import {mqzgetIndex} from "../../util";
import EditBox from "./EditBox";


// const gremember_info = country_codes.map((value) => {
//     return { [value.name] : value.dial_code };
// });

class RD_Question extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {           
            question: this.props.question
        }
    }

    addCategory() {
        let q = this.props.question;
        q.category.push("category");
        // q.answers.push(Object.assign({}, RD_Question.answers[0]));
        this.setState({
            question: q
        });

        this.props.changeQuestion(           
            q
        );
    }

    changeTitle(e, index) {
        let q = this.props.question;
        q.category[index] = e;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    changeTopicTitle(e, index) {
        let q = this.props.question;
        q.topic[index] = e;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    addTopic( ) {
        let q = this.props.question;
        
        if (!q.topic) {
            q.topic = [];        
        }
            
        
        q.topic.push("topic");
        
        this.setState({
            question: Object.assign({}, q)
        });

        this.setState({
            question: q
        });

        this.props.changeQuestion(
           q
        );
    }

    render() {
        const is_edit = (this.props.activate &&  this.props.activate.status == "edit");

        const is_scored = this.state.question.scored_question
        
        let category = this.state.question.category.map((val, index) => (
            <div class="q-section" key={`q-answer-category-${index}`} index={index}>
                <div class="q-icon">
                    { is_edit &&
                    (<div class="q-sharp">
                    </div>)
                    }
                </div>

                <div class="q-answer">
                    <span class="q-a-pre">-</span>                    
                    <span class="q-a-title">
                        <EditBox text={val} key={`q-a-title-${index}`} className="q-control" change={(e) => {this.changeTitle(e, index);}}/>
                    </span>                  
                </div>
            </div>
        ));
        
        let others = "";

        if (this.state.question.topic) {
            others = this.state.question.topic.map((val, index) =>  (
                <div class="q-section" key={`q-other-topic-${index}`} index={"topic" + index}>
                    <div class="q-icon"> 
                    { is_edit &&                       
                        <div class="q-sharp">
                        </div>     
                    }                   
                    </div>

                    <div class="q-answer">
                        <span class="q-a-pre">-</span>                    
                        <span class="q-a-title">
                        <EditBox text={val} key={`q-a-edit-topic-${index}`} className="q-control" change={(e) => {this.changeTopicTitle(e, index);}}/>
                        </span>                    
                    </div>
                </div>
            ));
        }

        return (
            <Fragment>
                <div class="question-content">
                    {category}
                    {is_edit &&
                    <div class="q-section">
                        <div class="q-add-answer" onClick={(e) => {this.addCategory();}}>
                            <div class="q-a-icon">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 16.5C4.56865 16.5 0.875 12.8063 0.875 8.25C0.875 3.69365 4.56865 0 9.125 0C13.6813 0 17.375 3.69365 17.375 8.25C17.375 12.8063 13.6813 16.5 9.125 16.5ZM9.125 15C12.8529 15 15.875 11.9779 15.875 8.25C15.875 4.52208 12.8529 1.5 9.125 1.5C5.39708 1.5 2.375 4.52208 2.375 8.25C2.375 11.9779 5.39708 15 9.125 15ZM12.875 7.5H9.875V4.5H8.375V7.5H5.375V9H8.375V12H9.875V9H12.875V7.5Z" fill="#DADADA"/>
                                </svg>
                            </div>
                            <span>Category</span>                            
                        </div>
                    </div>
                    }
                    {others}
                    {is_edit &&
                    <div class="q-section">
                        <div class="q-add-answer" onClick={(e) => {this.addTopic();}}>
                            <div class="q-a-icon">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 16.5C4.56865 16.5 0.875 12.8063 0.875 8.25C0.875 3.69365 4.56865 0 9.125 0C13.6813 0 17.375 3.69365 17.375 8.25C17.375 12.8063 13.6813 16.5 9.125 16.5ZM9.125 15C12.8529 15 15.875 11.9779 15.875 8.25C15.875 4.52208 12.8529 1.5 9.125 1.5C5.39708 1.5 2.375 4.52208 2.375 8.25C2.375 11.9779 5.39708 15 9.125 15ZM12.875 7.5H9.875V4.5H8.375V7.5H5.375V9H8.375V12H9.875V9H12.875V7.5Z" fill="#DADADA"/>
                                </svg>
                            </div>                           
                            <span>Topic</span>                            
                        </div>
                    </div>
                    }
                </div>
            </Fragment>
        )

    }
}

RD_Question.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func,
    addQuestion: PropTypes.func,    
    activate: PropTypes.object,
};

export default RD_Question;
