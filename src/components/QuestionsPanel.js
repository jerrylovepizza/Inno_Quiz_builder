import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QSettings from "./Content/QSettings";
import FBSettings from "./Content/FBSettings";
import TX_Settings from "./Content/TX_Settings";
import RT_Settings from "./Content/RT_Settings";
import PH_Settings from "./Content/PH_Settings";
import YN_Settings from "./Content/YN_Settings";
import RD_Settings from "./Content/RD_Settings";
import NewQuestion from "./Content/NewQuestion";
import QPopup from "./Content/QPopup";
import HF_Settings from "./Content/HF_Settings";
import RTooltip from "./Content/RTooltip";

import {SortableContainer, SortableElement, SortableHandle, arrayMove} from "../module/sortable/index";
import EM_Settings from "./Content/EM_Settings";

const DragHandle = SortableHandle(() => <a class="q-op-btn"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2ZM2 11C0.89543 11 0 10.1046 0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11ZM2 18C0.89543 18 0 17.1046 0 16C0 14.8954 0.89543 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18Z" fill="#DADADA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C7 3.10457 7.89543 4 9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2ZM9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11ZM9 18C7.89543 18 7 17.1046 7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18Z" fill="#DADADA"/>
</svg>
</a>);

const Sortable_Container = SortableContainer(({children}) => {
  return <div class="builder-content">{children}</div>;
});

const SortableItem = SortableElement(({children}) => {
    return (
        <Fragment>{children}</Fragment>
    )
},  {withRef: true});

class QuestionsPanel extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        questions: this.props.questions,
        new_question: {
            id : this.props.questions.length + 1,
            title: "",
            type: ""        
        },
        
        };
    
        //   this.dragStart = this.dragStart.bind(this);
        //   this.dragOver = this.dragOver.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.questions.length > state.questions.length) {
           return {
            questions: props.questions,
            new_question: {
                id : props.questions.length + 1,
                title: "",
                type: ""        
            }
           }
        } else {
            return {
                questions: props.questions
            }
        }

        return null;
    }  

    // dragStart(event) {
    //     this.drag_el = event.currentTarget;
    
    //     event.dataTransfer.effectAllowed = "move";
    //     event.dataTransfer.setData("text/html", this.drag_el);
    // }
    
    // dragOver(event) {
    //     event.preventDefault();
    
    //     const { target } = event;
        
    //     this.drag_el.style.display = "none";
    //     this.over = target;        
    //     target.parentNode.insertBefore(placeholder, target);
    // }
    
    // dragEnd() {
    //     event.preventDefault();
    //     this.drag_el.style.display = "block";
    //     this.drag_el.parentNode.removeChild(placeholder);
    // }
    
    // static getDerivedStateFromProps(props, state) {
    //     if (props.questions.length != state.questions.length) {
    //         return {
    //             questions: props.questions
    //         }
    //     } else {
            
    //     }

    //     return null;
    // }


    // handleChange (selvalue) {
    //     this.new_question_type = selvalue;
    // }

    // openModal(did) {
    //     this.setState({
    //         visible : true,
    //         delete_id: did
    //     });
    // }
 
    // closeModal() {
    //     this.setState({
    //         visible : false
    //     });
    // }

    deleteQuestion(q, event) {
        event.preventDefault();
        event.stopPropagation();

        if (q) {
            this.props.activateQuestion({
                id: 1
            });
            this.props.deleteQuestion(q);
        }
        // this.closeModal();
    }

    // quiz_expand(qid) {
    //     this.setState({
    //         question_id: qid
    //     });

    //     this.props.activateQuestion(qid);
    // }

    editQuestion(q) {        
        this.props.activateQuestion({
            id: q.id,
            status: "edit"
        });
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        // this.setState(({questions}) => ({
        //     questions: arrayMove(questions, oldIndex, newIndex),
        // }));

        let questions = arrayMove(this.state.questions, oldIndex, newIndex);
        questions = questions.map((value, index) => {
            value.id = index + 1;
            return value;
        });

        this.setState( { questions: questions });

        if (oldIndex != newIndex) {
            this.props.reorderQuestion({
                start: oldIndex, 
                end: newIndex
            });
        }
      };
    
    
    onActiviate(q) {
        this.props.activateQuestion({
            id: q.id
        });

    }

    addQuestion(q) {
        q.id = this.props.length + 1;
        this.props.addquestion(q);
        this.props.activateQuestion({
            id: q.id,
            status: this.props.activate.status
        });
    }

    componentDidUpdate() {
        const activate = this.props.activate;

        if (activate.status == "edit") {
            console.log(this.refs["in-qq-section" + activate.id]);

            this.refs["in-qq-section" + activate.id].scrollIntoView({
              behavior: "smooth",
              block: "start",
            });    
        }
        
    }
    
  render() {
    
    const new_question = this.state.new_question;
    const activate = this.props.activate;
   
    if (activate && activate.status == "edit") {
        
        if (!this.props.questions.length) {
            return (<Fragment></Fragment>);
        
        }       
        let q = this.props.questions[this.props.activate.id - 1];

        return (
            <Fragment>
                <div class="builder-content q-w-25">
                    {this.state.questions.map((qq, index) => {
                        if (qq.type) {
                            return (
                                <div  ref={"in-qq-section" + qq.id} className={qq.id == activate.id ? "question-section active" : "question-section"} onClick={(e) => {this.onActiviate(qq)}}>
                                <NewQuestion  question={qq} key={`item-${qq}`} index={index} activate={activate}  changeQuestion={this.props.changeQuestion }
                                 ></NewQuestion>
                                 <QPopup position={index} />
                                </div>
                            )
                        };                        
                    })}

                    <div class="question-section">
                        <NewQuestion question={new_question} key={new_question.id} addQuestion={(e) => {this.addQuestion(e)}}changeQuestion={this.props.changeQuestion }></NewQuestion>
                    </div>
                </div>
                <div class="builder-question-settings q-w-25">
                    { q.type == "MC" ? (
                        <QSettings key={"inn-qq-set-" + q.id} activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></QSettings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "FB" ? (
                        <FBSettings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></FBSettings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "TX" ? (
                        <TX_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></TX_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "RT" ? (
                        <RT_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></RT_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "PH" ? (
                        <PH_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></PH_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "EM" ? (
                        <EM_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></EM_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "WS" ? (
                        <EM_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></EM_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "YN" ? (
                        <YN_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></YN_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "RD" ? (
                        <RD_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></RD_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "FU" ? (
                        <RD_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></RD_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                    { q.type == "HF" ? (
                        <HF_Settings key={"inn-qq-set-" + q.id}  activateQuestion={this.props.activateQuestion} questions={this.props.questions} activate={this.props.activate} changeQuestion={this.props.changeQuestion}></HF_Settings>
                    ) : (<Fragment></Fragment>) 
                    }
                </div>
            </Fragment>
        )
    } else {
        return (
            
            <Sortable_Container onSortEnd={this.onSortEnd} useDragHandle>
                {this.state.questions.map((q, index) => (
                    <SortableItem key={`q-item-${index}`} index={index}>
                        <div className={q.id == activate.id ? "question-section active" : "question-section"}  onClick={(e) => {this.onActiviate(q)}}>            
                            <NewQuestion question={q} key={q.id} addQuestion={false} changeQuestion={this.props.changeQuestion }></NewQuestion>
                            { (q.type != "") ? (
                            <div class="operate-panel">
                                <RTooltip message={"Delete"} position={(index  > 0) ? "top" : "bottom"}>
                                <a class="q-op-btn" onClick={(e) => {this.deleteQuestion(q, e)}}><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.36552 0H11.8198C12.8239 0 13.6379 0.813984 13.6379 1.81808V2.72646H16.3628C17.3669 2.72646 18.1808 3.54045 18.1808 4.54455V6.36263C18.1808 7.36673 17.3669 8.18072 16.3628 8.18072H16.2894L15.4531 18.182C15.4531 19.1861 14.6391 20.0001 13.635 20.0001H4.54457C3.54047 20.0001 2.72648 19.1861 2.72962 18.2575L1.88989 8.18072H1.81808C0.813984 8.18072 0 7.36673 0 6.36263V4.54455C0 3.54045 0.813984 2.72646 1.81808 2.72646H4.54743V1.81808C4.54743 0.813984 5.36142 0 6.36552 0ZM4.54743 4.54521V4.54456H1.82065V6.36264H16.3653V4.54456H13.6379V4.54521H4.54743ZM4.54442 18.1802L3.714 8.18072H14.465L13.638 18.1047L13.6348 18.1802H4.54442ZM11.8171 1.81931V2.72835H6.36285V1.81931H11.8171ZM5.72146 10.6423L7.00704 9.35675L9.09138 11.4411L11.1757 9.35675L12.4613 10.6423L10.377 12.7267L12.4613 14.811L11.1757 16.0966L9.09138 14.0122L7.00704 16.0966L5.72146 14.811L7.8058 12.7267L5.72146 10.6423Z" fill="#DADADA"/>
                                </svg>
                                </a>
                                </RTooltip>

                                <RTooltip message={"Duplicate"} position={(index  > 0) ? "top" : "bottom"}>
                                <a class="q-op-btn" onClick={(e) => {this.props.duplicateQuestion(q)}}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83337 18.3333C1.83337 19.3417 2.65837 20.1667 3.66671 20.1667H16.5V18.3333H3.66671V5.5H1.83337V18.3333Z" fill="#DADADA"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33321 1.8335H18.3332C19.3415 1.8335 20.1665 2.6585 20.1665 3.66683V14.6668C20.1665 15.6752 19.3415 16.5002 18.3332 16.5002H7.33321C6.32488 16.5002 5.49988 15.6752 5.49988 14.6668V3.66683C5.49988 2.6585 6.32488 1.8335 7.33321 1.8335ZM7.33318 14.6669H18.3332V3.66686H7.33318V14.6669Z" fill="#DADADA"/>
                        <path d="M11.9167 13.7502H13.75V10.0835H17.4167V8.25016H13.75V4.5835H11.9167V8.25016H8.25V10.0835H11.9167V13.7502Z" fill="#DADADA"/>
                        </svg>
                                </a>
                                </RTooltip>

                                <RTooltip message={"Edit"} position={(index  > 0) ? "top" : "bottom"}>
                                <a class="q-op-btn" onClick={(e) => {this.editQuestion(q)}}>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7524 1.9165C16.3799 1.9165 16.9814 2.16703 17.4206 2.60978L20.3923 5.58148C20.8348 6.02392 21.0833 6.624 21.0833 7.24971C21.0833 7.87541 20.8348 8.47549 20.3923 8.91793L9.54257 19.7643C8.87319 20.5364 7.92432 21.0108 6.83728 21.0854H1.91663V20.1271L1.91974 16.0877C2.00138 15.0771 2.47118 14.1375 3.18785 13.506L14.083 2.61094C14.5248 2.16647 15.1257 1.9165 15.7524 1.9165ZM6.76961 19.1711C7.28157 19.1349 7.75813 18.8966 8.1408 18.4589L15.3877 11.212L11.7898 7.61391L4.50039 14.9015C4.11212 15.2449 3.87192 15.7254 3.83329 16.1648V19.1693L6.76961 19.1711ZM13.1452 6.25879L16.743 9.85671L19.0371 7.56264C19.12 7.47965 19.1667 7.36708 19.1667 7.2497C19.1667 7.13233 19.12 7.01976 19.0371 6.93677L16.0627 3.96241C15.9806 3.87969 15.8689 3.83317 15.7524 3.83317C15.6359 3.83317 15.5242 3.87969 15.4421 3.96241L13.1452 6.25879Z" fill="#DADADA"/>
                                    </svg>
                                </a>
                                </RTooltip>
                                <RTooltip message={"Move"} position={(index  > 0) ? "top" : "bottom"}>
                                    <DragHandle/>
                                </RTooltip>                                
                            </div>
                            ): (<Fragment></Fragment>)
                            }

                            <QPopup position={index} />
                        </div>
                    </SortableItem>
                ))}
                <div class="question-section">
                    <NewQuestion question={new_question} activate={this.props.activate} key={new_question.id} addQuestion={(e) => {this.addQuestion(e)}} changeQuestion={this.props.changeQuestion }></NewQuestion>
                </div>
            </Sortable_Container>

        )
    }
    }
}

QuestionsPanel.propTypes = {
    quiz: PropTypes.object,
    questions: PropTypes.array,
    addquestion: PropTypes.func,
    changeQuestion: PropTypes.func,
    activateQuestion: PropTypes.func,
    deleteQuestion: PropTypes.func,
    reorderQuestion: PropTypes.func,
    activate: PropTypes.object,
    duplicateQuestion: PropTypes.func,
    help: PropTypes.bool
};

export default QuestionsPanel;
