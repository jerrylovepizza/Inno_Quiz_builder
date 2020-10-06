import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class RD_Compnent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            question: this.props.question,
        };
    }
    
    // onChangeTex(e) {
    //     let q = Object.assign({}, this.state.question);
    //     q.text = e.target.value;

    //     this.setState({
    //         question: q
    //     });
    // }

    render() {
        
        const q = this.props.question;
        const question = this.state.question;

        const category = (e, e1) => (
            <tr class="qs-category-options">
                <td><span class="qs-rd-topic">{e}</span></td>
            {                
                question.category.map((val, index) => (
                <td><span class="qs-radio "><input id={"qs-cat-e" + e1 } type="radio" name={"qs-cat-" + e1 + "[]"} checked /></span></td>
                ))
            }
            </tr>
        );

        return (
            <div class={q.img_align + " mc-question rd-question"}  >

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
                    <div class="qs-content-options">
                        <table>
                            <thead>
                                <th> </th>                               
                                {
                                    question.category.map((val) => (
                                        <td><span class="qs-rd-cat">{val}</span></td>
                                    ))
                                }
                                
                            </thead>
                        {
                            question.topic.map((val, index) => 
                            {
                                return category(val, index);
                            })
                        }
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

RD_Compnent.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func
};

export default RD_Compnent;