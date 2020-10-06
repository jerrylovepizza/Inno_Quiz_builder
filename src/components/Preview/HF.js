import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class HF_Compnent extends Component {
    
    constructor(props) {
        super(props);

    }
  

    render() {
        
        const q = this.props.question;
       
        return (
            <div class={q.img_align + " mc-question tx-question"}  >

                <div class="qs-header">
                    <ContentEditable
                    html={q.title}
                    disabled={true}                    
                    tagName='h3'
                    />
                </div>
                {
                    (q.description) ? (
                        <div class="qs-description">
                            <ContentEditable              
                            html={q.description}
                            disabled={true}                    
                            tagName='p'
                            />
                        </div>
                    ) : (<Fragment></Fragment>)
                }

            </div>
        )
    }
}

HF_Compnent.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func
};

export default HF_Compnent;