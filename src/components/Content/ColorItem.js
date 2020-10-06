
import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import ColorPicker from 'rc-color-picker';

class ColorItem extends Component {

  constructor(props) {
    super(props);
    
  };

  changeColor(color) {
    this.props.changeColor(
        {
            color: color.color.substring(1),
            alpha: color.alpha
        }
    );
    //this.props.changeColor(color);
  }

  render() {
        const title = this.props.title;

    return (
        <div class="cl-item">
        
            <span>{title}</span>
            <input type="text" value={this.props.color.color} class="color-value" readOnly="readOnly"></input>

            <div class="cp-wrap">
                <ColorPicker
                animation="slide-up"
                color={"#" + this.props.color.color}
                onChange = {(e) => {this.changeColor(e)}}           
                />
            </div>
        </div>
    );
  };
};

ColorItem.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    changeColor: PropTypes.func,    
}

export default ColorItem;