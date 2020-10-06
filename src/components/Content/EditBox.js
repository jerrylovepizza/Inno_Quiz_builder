import React,  { Component }from "react"
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";
import {getCaretPosition} from "../../constants/Index";

class EditBox extends Component {
  constructor(props) {
    super(props)
    this.state = {html: this.props.text};
  };


  handleChange = evt => {
    let html = evt.target.value;
    
    //var regex = /(<([^>]+)>)/ig
    // var result = html.replace("&nbsp;", " ");

    this.setState({html: html});
    
    this.props.change(html);
    
 
  };

  // onKeyup = (e) => {
  //   console.log(getCaretPosition());
  // }
  
  render = () => {
    return <ContentEditable
            className={this.props.className + " q-rich-editor "}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              data-placeholder={this.props.placeholder}
            />
  };
};

EditBox.propTypes = {
    text: PropTypes.string,
    change: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
}
export default EditBox;