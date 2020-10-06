import React, { Component, Fragment,PureComponent  } from "react";
import PropTypes from "prop-types";
import {QUESTION_TYPES} from "./QuestionType";
import {mqzgetIndex} from "../../util";
import EditBox from "./EditBox";
import {MC_MODEL} from "../../constants/model";
import {customMediaLibrary} from "../../module/mediaupload";

class MC_Question extends PureComponent {

    constructor(props) {
        super(props);
       // 
      //  let gindex = mqzgetIndex(this.props.question.type, QUESTION_TYPES, "value");
        
        this.state = {           
            question: this.props.question
        }
    }

    addAnswer() {
        let q = this.props.question;
        q.answers.push(Object.assign({}, MC_MODEL.answers[0]));
        this.setState({
            question: q
        });

        this.props.changeQuestion(           
            q
        );
    }

    changeTitle(e, index) {
        let q = this.props.question;
        q.answers[index].title = e.target.value;

        this.setState({
            question: q
        });

        this.props.changeQuestion(q);
    }

    changeScore(e, index) {
        let q = this.props.question;
        q.answers[index].score = e.target.value;
        

        this.setState({
            question: Object.assign({}, q)
        });
        // this.setState({
        //     question: q
        // });

        this.props.changeQuestion(q);
    }

    addOthers( ) {
        let q = this.props.question;
        
        if (!q.others)
            q.others = [];
        
        q.others.push({text: ""});
        
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

    removeAnswer(e) {
        if (e >= 0) {
            let q = this.props.question;

            q.answers = [
                ...q.answers.slice(0, e),
                ...q.answers.slice(e + 1)
            ];
            this.setState({
                question: q
            });

            this.props.changeQuestion(           
                q
            );    
        }        
    }

    addAnswerImage(e) {
        let self = this;
        let point = e;

        customMediaLibrary.off("close").on("close",function() {

            try {
                let attachment = customMediaLibrary.state().get("selection").first().toJSON();
                
                if ( ! attachment ) return;
                
                //console.log(attachment.url);
        
                // self.props.change({            
                //     img: attachment.url
                // });

                let q = self.props.question;
                q.answers[point].url = attachment.url;
                self.props.changeQuestion(
                    q
                );
            }
            catch (Exception){
                return false;
            }
        });
        
        
        customMediaLibrary.open();
    }

    render() {
        const is_edit = (this.props.activate &&  this.props.activate.status == "edit");

        const is_image = !this.props.question.is_image;
        const is_scored = is_edit && this.props.question.scored_question;
        
        //console.log(this.state.question.answers);
        let answers = this.props.question.answers.map((val, index) => (
            <div class="q-section" index={val}>
                <div class="q-icon">
                    { is_edit &&
                    (
                        <div class="q-mc-delete" onClick={(e) => {this.removeAnswer(index); }}>
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.36552 0H11.8198C12.8239 0 13.6379 0.813984 13.6379 1.81808V2.72646H16.3628C17.3669 2.72646 18.1808 3.54045 18.1808 4.54455V6.36263C18.1808 7.36673 17.3669 8.18072 16.3628 8.18072H16.2894L15.4531 18.182C15.4531 19.1861 14.6391 20.0001 13.635 20.0001H4.54457C3.54047 20.0001 2.72648 19.1861 2.72962 18.2575L1.88989 8.18072H1.81808C0.813984 8.18072 0 7.36673 0 6.36263V4.54455C0 3.54045 0.813984 2.72646 1.81808 2.72646H4.54743V1.81808C4.54743 0.813984 5.36142 0 6.36552 0ZM4.54743 4.54521V4.54456H1.82065V6.36264H16.3653V4.54456H13.6379V4.54521H4.54743ZM4.54442 18.1802L3.714 8.18072H14.465L13.638 18.1047L13.6348 18.1802H4.54442ZM11.8171 1.81931V2.72835H6.36285V1.81931H11.8171ZM5.72146 10.6423L7.00704 9.35675L9.09138 11.4411L11.1757 9.35675L12.4613 10.6423L10.377 12.7267L12.4613 14.811L11.1757 16.0966L9.09138 14.0122L7.00704 16.0966L5.72146 14.811L7.8058 12.7267L5.72146 10.6423Z" fill="#DADADA"></path></svg>
                        </div>
                    )
                    }
                </div>

                <div class="q-answer">
                    <span class="q-a-pre">-</span>
                    {is_image || 
                    (<span class="q-a-img" onClick={(e) => {this.addAnswerImage(index); }}>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0.166748H20.5C21.7426 0.166748 22.75 1.1368 22.75 2.33341V19.6667C22.75 20.8634 21.7426 21.8334 20.5 21.8334H2.5C1.25736 21.8334 0.25 20.8634 0.25 19.6667V2.33341C0.25 1.1368 1.25736 0.166748 2.5 0.166748ZM2.5 2.33341V14.8847L7.00001 10.5514L10.9375 14.343L18.25 7.30137L20.5 9.46803V2.33341H2.5ZM2.5 19.6667V17.9488L7.00001 13.6155L13.284 19.6667H2.5ZM20.5 19.6667H16.466L12.5285 15.8751L18.25 10.3655L20.5 12.5322V19.6667ZM13.75 6.66675C13.75 4.87182 12.239 3.41675 10.375 3.41675C8.51104 3.41675 7 4.87182 7 6.66675C7 8.46167 8.51104 9.91675 10.375 9.91675C12.239 9.91675 13.75 8.46167 13.75 6.66675ZM9.25 6.66675C9.25 6.06844 9.75368 5.58341 10.375 5.58341C10.9963 5.58341 11.5 6.06844 11.5 6.66675C11.5 7.26506 10.9963 7.75008 10.375 7.75008C9.75368 7.75008 9.25 7.26506 9.25 6.66675Z" fill="#32373C"/>
                        </svg>
                    </span>)
                    }
                    <span class="q-a-title">
                        <input value={val.title} type="text"  className="q-control q-rich-editor" onChange={(e) => {this.changeTitle(e, index);}} />                       
                    </span>
                    {is_scored ?
                        (<span class="scored">
                        <input value={val.score} type="text"  className="q-control" onChange={(e) => {this.changeScore(e, index);}}/>                       
                    </span>)
                    : ""
                    }
                </div>
            </div>
        ));
        
        let others = "";

        if (this.state.question.others) {
            others = this.state.question.others.map((val, index) =>  (
                <div class="q-section" key={`q-other-${val}-${index}`} index={index}>
                    <div class="q-icon"> 
                    { is_edit &&                       
                        <div class="q-sharp">
                        </div>     
                    }                   
                    </div>

                    <div class="q-answer">
                        <span class="q-a-pre">-</span>                    
                        <span class="q-a-title">
                            [...]
                        </span>                    
                    </div>
                </div>
            ));
        }

        return (
            <Fragment>
                <div class="question-content">
                    {answers}
                    {is_edit &&
                    <div class="q-section">
                        <div class="q-add-answer" onClick={(e) => {this.addAnswer();}}>
                            <div class="q-a-icon" >
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 16.5C4.56865 16.5 0.875 12.8063 0.875 8.25C0.875 3.69365 4.56865 0 9.125 0C13.6813 0 17.375 3.69365 17.375 8.25C17.375 12.8063 13.6813 16.5 9.125 16.5ZM9.125 15C12.8529 15 15.875 11.9779 15.875 8.25C15.875 4.52208 12.8529 1.5 9.125 1.5C5.39708 1.5 2.375 4.52208 2.375 8.25C2.375 11.9779 5.39708 15 9.125 15ZM12.875 7.5H9.875V4.5H8.375V7.5H5.375V9H8.375V12H9.875V9H12.875V7.5Z" fill="#DADADA"/>
                                </svg>
                            </div>                           
                            <span>answer</span>                            
                        </div>
                    </div>
                    }
                    {others}
                    {is_edit &&
                    <div class="q-section">
                        <div class="q-add-answer" onClick={(e) => {this.addOthers();}}>
                            <div class="q-a-icon">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 16.5C4.56865 16.5 0.875 12.8063 0.875 8.25C0.875 3.69365 4.56865 0 9.125 0C13.6813 0 17.375 3.69365 17.375 8.25C17.375 12.8063 13.6813 16.5 9.125 16.5ZM9.125 15C12.8529 15 15.875 11.9779 15.875 8.25C15.875 4.52208 12.8529 1.5 9.125 1.5C5.39708 1.5 2.375 4.52208 2.375 8.25C2.375 11.9779 5.39708 15 9.125 15ZM12.875 7.5H9.875V4.5H8.375V7.5H5.375V9H8.375V12H9.875V9H12.875V7.5Z" fill="#DADADA"/>
                                </svg>
                            </div>                           
                            <span>fill in the blank answer</span>                            
                        </div>
                    </div>
                    }
                </div>
            </Fragment>
        )

    }
}

MC_Question.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func,
    addQuestion: PropTypes.func,    
    activate: PropTypes.object,
};

export default MC_Question;
