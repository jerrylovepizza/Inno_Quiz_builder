import React, { Component, Fragment,PureComponent  } from "react";
import PropTypes from "prop-types";

class RT_Question extends PureComponent {

    constructor(props) {
        super(props);
       // 
      //  let gindex = mqzgetIndex(this.props.question.type, QUESTION_TYPES, "value");
        
        this.state = {           
            question: this.props.question
        }
    }

    render() {
        const is_edit = (this.props.activate &&  this.props.activate.status == "edit");

        let rates = Array(this.state.question.scale).keys().map((val) => (
            <div class="q-section" key={`q-answer-${val}-${index}`} index={index}>
                <div class="q-icon">
                    { is_edit &&
                    (<div class="q-sharp">
                    </div>)
                    }
                </div>

                <div class="q-answer">
                    <span class="q-a-pre">-</span>
                    
                    }
                    <span class="q-a-title">
                        {val}
                    </span>
                    
                </div>
            </div>
        ));
        
        

        return (
            <Fragment>
                <div class="question-content">
                    {rates}
                    
                </div>
            </Fragment>
        )

    }
}

RT_Question.propTypes = {
    question: PropTypes.object,
};

export default RT_Question;
