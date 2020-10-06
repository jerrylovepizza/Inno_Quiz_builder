import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import Select, { components }  from "react-select";
import {QUESTION_TYPES} from "./QuestionType";
import { connect } from "react-redux";
import {dispatchInsertQuestion} from "../../actions/questionActions";

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: "transparent", border: 0, boxShadow: "none", "&:hover": {borderColor: "transparent"} }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        
      return {
        ...styles        
      };
    },    
  };

const DropdownIndicator = props => {
return (
    <components.DropdownIndicator {...props}>
        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.84238 7L14.8818 0H0.802979L7.84238 7Z" fill="#32373C"/>
</svg>
    </components.DropdownIndicator>
);
};



class QPopup extends Component {
  constructor(props) {
    super(props)
    this.state = {
        selected: false
    }

  };

  handleChange(e) {
    const val = e.value;

    this.setState({
        selected: false
    });

    this.props.insertQuestion({
        index: this.props.position + 1,
        type: val
    });

    
  }

  onAddQuestion(e) {
    this.setState({
        selected: true
    });
  }

  render() {
    const style = this.state.selected ? {display: "block"} : {"display": "none"};

    return (
        <div class="qp-add-q">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e) => {this.onAddQuestion(e);}}>
            <circle cx="14.3435" cy="14.3435" r="12.656" fill="#FDFDFD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 27.8433C6.26801 27.8433 0 21.6104 0 13.9216C0 6.23293 6.26801 0 14 0C21.732 0 28 6.23293 28 13.9216C28 21.6104 21.732 27.8433 14 27.8433ZM14 25.3121C20.3261 25.3121 25.4545 20.2124 25.4545 13.9216C25.4545 7.63087 20.3261 2.5312 14 2.5312C7.6738 2.5312 2.54542 7.63087 2.54542 13.9216C2.54542 20.2124 7.6738 25.3121 14 25.3121ZM20.3636 12.656H15.2727V7.59361H12.7273V12.656H7.63637V15.1872H12.7273V20.2496H15.2727V15.1872H20.3636V12.656Z" fill="#DADADA"/>
            </svg>

            <div class="select-container" style={style}>
                <Select ref='seltype' options={QUESTION_TYPES} 
                styles={colourStyles}
                onChange={(e) => {this.handleChange(e)}}
                components={{DropdownIndicator, IndicatorSeparator: () => null, ClearIndicator: () => null,}}
                isClearable
                isSearchable={false}             
                value = {this.state.new_question_type}
                />
                <p class="qp-type">Select a Question Type.</p>
            </div>
        </div>
    );
  };
};

QPopup.propTypes = {
    position: PropTypes.number,
}

export const mapDispatchToProps = dispatch => {
    return {
        insertQuestion: (data) => {
            dispatch(dispatchInsertQuestion(data));         
        }
    };
}

export default connect(null, mapDispatchToProps)(QPopup);