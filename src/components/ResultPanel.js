import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ConditionItem from "./Content/ConditionItem";
import RTooltip from "./Content/RTooltip";

class ResultPanel extends Component {

    constructor(props) {
        super(props);

        if (this.props.rule.rule.length == 2 && this.props.rule.rule[0].count == 1) {
           if (this.props.result.conditions.length > 1) {
                this.props.changeRule({
                    change: "reset",
                    index: 0,
                    count: this.props.result.conditions.length
                });
           }
        }
    }

    onAdd(index) {
        let position = this.searchPosition(index);

        this.props.changeRule({
            change: "+",
            index: position
        });

        this.props.changeResult(
            {
                type: "ADD",
                index: index
            }
        );
    }

    searchPosition(index) {        
        let rule = this.props.rule.rule;
        let rule_res = 0;
        let i = 0;

        for (i = 0; i < rule.length; i++) {
            if (index < rule[i].count + rule_res) {                
                break;
            }
            rule_res += rule[i].count;
        }

        return i;        
    }

    onDelete(index) {
        let position = this.searchPosition(index);

        if (this.props.rule.rule[position].count == 1) {
            return ;
        }

        this.props.changeRule({
            change: "-",
            index: position
        });
        this.props.changeResult(
            {
                type: "REMOVE",
                index: index
            }
        );
    }

    onChangeResult(val, index) {
        this.props.rule.rule[index].redirect = val;
        this.props.changeRedirect({            
            index: index,
            result: val
        });
    }

    addRule() {
        let size = this.props.result.conditions.length;
        this.props.addRule(size);
        this.props.changeResult(
            {
                type: "ADD",
                index: size - 1
            }
        );
    }

    deleteRule(index) {
        
        if (this.props.rule.rule.length <=2 ) {
            return;
        }

        let rindex = 0;
        for (let i = 0; i < index; i++) {
            rindex += this.props.rule.rule[i].count;
        }
        //console.log(rindex);

        this.props.changeResult({
            type: "DELETE",
            index: rindex,
            count: this.props.rule.rule[index].count
        });
        this.props.deleteRule(index);        
    }

    render() {
        const conditions = this.props.result.conditions;
        const con1 = conditions[0];
        const rule = this.props.rule.rule;
        let rule_pos = 0;        
        let res_count = 0;
        res_count += rule[0].count;

        return (
            <div class="conditions_wrapper">
                <div class="rule_row">
                    <span class="rule-title">RULE {rule_pos + 1}</span>
                    <span class="rule-line"></span>
                    <a class="delete-rule" onClick={(e) => {this.deleteRule(0);}}>
                        DELETE RULE
                    </a>
                </div>
                    {
                        conditions.map((val, index) => {
                            let rule_row = (<Fragment></Fragment>);
                            

                            if (res_count > 0 && index == res_count) {
                                rule_pos ++;
                                const del_index = rule_pos;
                                rule_row = (
                                    <div class="rule_row">
                                        <span class="rule-title">RULE {rule_pos + 1}</span>
                                        <span class="rule-line"></span>
                                        <a class="delete-rule" onClick={(e) => {this.deleteRule(del_index);}}>
                                            DELETE RULE
                                        </a>
                                    </div>                                
                                )
                                
                                res_count += rule[rule_pos].count;
                            }
                            
                            const rule_index = rule_pos;

                            return (
                            <Fragment>
                            {rule_row}
                            <div class="r_row" index={"result-condition-index" + index}>

                                <ConditionItem result={val} point={index} changeResult={this.props.changeResult} questions={this.props.questions}></ConditionItem>
                                    <div class="r_action">

                                        <RTooltip message={"Add New Condition"} position={ "top" }>
                                        <span class="r_a_add" onClick={(e) => {this.onAdd(index);}}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM16 10H12V6H10V10H6V12H10V16H12V12H16V10Z" fill="#DADADA"/>
                                        </svg>
                                        </span>
                                        </RTooltip>

                                        <RTooltip message={"Remove This Condition"} position={ "top" }>
                                        <span class="r_a_delete" onClick={(e) => {this.onDelete(index);}}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM7 11V13H17V11H7Z" fill="#DADADA"/>
                                            </svg>
                                        </span>
                                        </RTooltip>
                                    </div>
                                </div>
                                <div className={ res_count == index + 1 ? "r_redirect r_redirect_input" : "r_redirect"}>
                                    <span>then redirect to</span>   
                                    <input type="text" index={"redirect-"+ rule_pos} name="r_redirect_url" class="q-control" placeholder="Url"  onChange={(e) => {this.onChangeResult(e.target.value, rule_index);}} value={rule[rule_index].redirect} ></input>
                                </div>
                                </Fragment>
                            )
                        })
                    }

                    <div class="rule_row">
                        <a class="new-rule delete-rule" onClick={(e) => {this.addRule();}}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM16 10H12V6H10V10H6V12H10V16H12V12H16V10Z" fill="#DADADA"/>
                            </svg>
                            NEW RULE
                        </a>
                        <span class="rule-line line-left"></span>                        
                    </div>

            </div>
        );
    }

}

ResultPanel.propTypes = {   
    result: PropTypes.object,
    changeResult: PropTypes.func,
    questions: PropTypes.object,
    rule: PropTypes.object,
    addRule: PropTypes.func,
    deleteRule: PropTypes.func,
    changeRule: PropTypes.func,
    changeRedirect: PropTypes.func,
};

export default ResultPanel;
