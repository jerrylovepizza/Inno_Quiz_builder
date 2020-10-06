import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class MC_Compnent extends Component {
    
    constructor(props) {
        super(props);
        
        // this.state = {
        //     question: this.props.question,
        // };
    }
    
    render() {
        
        const q = this.props.question;
        const acount = q.answers.length + 1;
        const others = q.others ? q.others : [];
        const is_image = q.is_image;
        let answers = "";

        if (is_image) {
            answers = (
                (
                    <div class="qs-content qs-img-content">
                        {
                            q.answers.map((as, index) => (
                                <div class="qs-img"  index={index}>
                                    {
                                        as.url ? (
                                            <img src={as.url} />
                                        ) :                                         
                                        (<div class="qs-blank-img"></div>)
                                    }
                                    
                                    <span class="qs-index">{index + 1}</span>
                                </div>
                            )
                            )
                        }
                    </div>
                )
            )
        } else {
            answers = (
                (
                    <div class="qs-content">
                        {
                            q.answers.map((as, index) => (
                                <div class="qs-answer" index={index}>
                                    <span class="qs-index">{index + 1}</span>
                                    <span class="qs-item"><ContentEditable              
                                        html={as.title}
                                        disabled={true}                    
                                        tagName='span'
                                        /></span>
                                </div>
                            )
                            )
                        }
                        {
                            others.map((o, index) => (
                                <div class="qs-answer qs-others" key={`${o}`} >
                                    <span class="qs-index">{index + acount }</span>
                                    <span class="qs-item"><input type="text" class="qs-control" placeholder="type your answer here" value={o.title}></input></span>
                                </div>
                            ))
                        }
                    </div>
                )
            )
        }
        return (
            

            <div class={q.img_align + " mc-question"}  >
                <div class="qs-bg-img">
                    {   
                        q.add_img ? 
                        (<img src={q.img}></img>)
                        :                        
                        (<Fragment></Fragment>)
                    }
                </div>

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
                
                {answers}

                
            </div>
        )
    }
}

MC_Compnent.propTypes = {

    question: PropTypes.object,
    changeQuestion: PropTypes.func
};

export default MC_Compnent;
