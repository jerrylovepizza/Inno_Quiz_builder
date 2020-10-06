import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FieldItem from "./Content/FieldItem";
import {gl_img_url} from "./../util";
import RTooltip from "./Content/RTooltip";

class IntegrationPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "mailer",
        }

        if (this.state.selected == "mailer") {
            this.props.readField();
        }
    }
    
    onClick(name) {
        this.setState({
            selected: name
        });

        this.props.readField();
    }

    onAdd() {
        this.props.addMailer();
    }

    onDelete(index) {
        this.props.deleteMailer(index);
    }


    render() {
        const is_fields = this.props.mailer.fields.length;

        return (
            <Fragment>                
                <div className="integration-wrapper">                    
                    <div class="integration-left">
                        <h3>Integrate Your Survey with Other Applications</h3>

                        <div class="in-item" onClick={(e) => {this.onClick("mailer");}}>
                            <div class="in-icon mailer">
                                <img src={gl_img_url("mailer.png")}></img>                    
                            </div>
                            <div class="in-content">
                                <span>Mailerlite</span>
                                <p>Import your respondents directly into the email marketing solution MailerLite by enabling this integration</p>
                            </div>
                        </div>
                    </div>

                    <div class="integration-right">
                        <div class="mf-row">
                            <h4>Mailing List Fields</h4>
                            <div class="mf-action"></div>
                            <h4 class="mf-m-title">Matching Questions</h4>
                            <div class="mf-action"></div>
                        </div>

                        {


                            (is_fields > 0) &&
                            (
                                this.props.mailer.mails.map((m, index) => (
                                    <div class="mf-row">
                                        <FieldItem index={"mf-" + index} mailer={m} fields={this.props.mailer.fields} questions={this.props.questions} pos={index} changeMailer={this.props.changeMailer}></FieldItem>
                                        <div class="mf-action">
                                        <RTooltip message={"Add New Field"} position={ "top" }>
                                            <a class="mi-btn" onClick={(e) => {this.onAdd();}}>                             
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM16 10H12V6H10V10H6V12H10V16H12V12H16V10Z" fill="#DADADA"/>
                                            </svg>
                                            </a>
                                        </RTooltip>

                                        <RTooltip message={"Remove This Field"} position={ "top" }>
                                            <span class="r_a_delete" onClick={(e) => {this.onDelete(index);}}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM7 11V13H17V11H7Z" fill="#DADADA"/>
                                                </svg>
                                            </span>
                                        </RTooltip>
                                        </div>
                                    </div>
                                ))
                            )
                        }

                           
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

IntegrationPanel.propTypes = {   
    questions: PropTypes.object,
    mailer: PropTypes.object,
    readField: PropTypes.func,
    changeMailer: PropTypes.func,
    addMailer: PropTypes.func,
    deleteMailer: PropTypes.func,
};

export default IntegrationPanel;