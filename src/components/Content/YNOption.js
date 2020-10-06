
import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"

class YNOption extends Component {

  constructor(props) {
    super(props);
    
  };

  changeOption() {
    this.props.changeOption(
        {
            option: !this.props.option.option
        }
    );
    //this.props.changeColor(color);
  }

  render() {
        const title = this.props.title;

    return (
        <div class="cl-item">            
            <ContentEditable
              className={"tooltip-message"}
                html={title}
                disabled={true}             
                tagName="span"            
              />

            <div class="q-s-checkbox">
                <input type="checkbox" class="ios8-switch ios8-switch-sm" checked={this.props.option.option} onChange={(e) => {this.changeOption()}} id="checkbox1"/>
                <label for="checkbox1"></label>
            </div>
            
        </div>
    );
  };
};

YNOption.propTypes = {
    title: PropTypes.string,
    option: PropTypes.bool,
    changeOption: PropTypes.func,    
}

export default YNOption;