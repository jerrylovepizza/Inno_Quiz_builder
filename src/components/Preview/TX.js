import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class TX_Compnent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            question: this.props.question,
        };
    }
    
    onChangeTex(e) {
        let q = Object.assign({}, this.state.question);
        q.text = e.target.value;

        this.setState({
            question: q
        });
    }

    render() {
        
        const q = this.props.question;
        const question = this.state.question;

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

                <div class="qs-content">
                    <div class="qs-answer qs-others">
                        <span class="qs-index"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 20C2 21.1046 2.89543 22 4 22H17.4142L22 17.4142V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20ZM4 4H20V15H17C15.8954 15 15 15.8954 15 17V20H4V4ZM17 17H19.5858L17 19.5858V17ZM7 15V17H13V15H7ZM7 13V11H17V13H7ZM7 7V9H17V7H7Z" fill="#95BB54"/>
                        </svg>
                        </span>
                        <span class="qs-item">
                            <ContentEditable              
                            html={q.text}                            
                            tagName='p'
                            class="qs-control"
                            />
                            </span>
                    </div>
                </div>

                <div class="qs-bg-img">
                    {
                        q.add_img ? 
                        (<img src={q.img}></img>)
                        :                        
                        (<Fragment></Fragment>)
                    }
                </div>                

            </div>
        )
    }
}

TX_Compnent.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func
};

export default TX_Compnent;