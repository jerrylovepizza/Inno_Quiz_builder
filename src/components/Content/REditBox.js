import React,  { Component }from "react"
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import {dispatchChangeQuill} from "../../actions/quill";
import { connect } from "react-redux";

let Embed = ReactQuill.Quill.import("blots/embed");
class EmphBlot extends Embed {
  static create(value) {

    let node = super.create(value);    
    node.setAttribute("data-id", value.id);
    node.setAttribute("class", "recall-em " + value.className);
    return node;
  }

  static value(node) {
    return {
      id: node.getAttribute("data-id"),
      className: node.getAttribute("class").replace("recall-em", "").trim()
    };
  }
}

EmphBlot.blotName = "em";
EmphBlot.tagName = "em";
EmphBlot.className = "recall-em";
ReactQuill.Quill.register("formats/em", EmphBlot);


class REditBox extends Component {
  constructor(props) {
    super(props)
    this.state = { html: this.props.text }
    this.handleChange = this.handleChange.bind(this)
    this.reactQuillRef = null;

  };

  handleChange = evt => {
  //  console.log(evt);
    // let html = evt;
  
    // this.setState({html: evt});
    
    this.props.change(evt);
  
  };

  
  render = () => {
    //console.log(this.reactQuillRef);
   

    return <ReactQuill
          ref = {(el) => this.reactQuillRef = el }
          theme="bubble"
          onChange={this.handleChange}
          value={this.props.text}
          modules={REditBox.modules}
          formats={REditBox.formats}          
          placeholder={this.props.placeholder}
          onBlur={(range, source, quill) => {
            this.props.changeQuill({
              quill: this.reactQuillRef,
              index: range.index,
              selected: this.props.q_id
            })
           }}
         />
  };
};

REditBox.propTypes = {
    text: PropTypes.string,
    change: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string, 
    q_id : PropTypes.number,  
}




REditBox.modules = {
  toolbar: [
    
    ["bold", "italic", "underline", "strike"],
    
  ],
  clipboard: {    
    matchVisual: false,
  }
}

REditBox.formats = [
  "bold", "italic", "underline", "strike",
  "image", "formats/em", "em"
]


export const mapDispatchToProps = dispatch => {
    return {
        changeQuill: (data) => {
            dispatch(dispatchChangeQuill(data));         
        }
    };
}

export default connect(null, mapDispatchToProps)(REditBox);
