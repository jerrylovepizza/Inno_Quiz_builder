import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import ColorItem from "./ColorItem";

const titles = [
    "Question Headline",
    "Description",
    "Answer",
    "Button",
    "Button Color",
    "Label",
    "Answer Border",
    "Answer Background",
    "Icons",
    "Bar Chart",
    "Bar Chart Hover",    
    "Progression Bar",
    "Background Color",
];

class ColorOptions extends Component {
  constructor(props) {
    super(props) 
  };

  changeColor(e, index) {      
      this.props.changeColor({
          index: index,
          color: e
      });
  }
  render() {
   
    return (
        <Fragment>
            {
                this.props.colors.map((c, index) => (
                    <ColorItem index={"cl-0" + index} title={titles[index]} color={c} changeColor={(e) => {this.changeColor(e, index)}}></ColorItem>
                ))
            }
        </Fragment>
    );
  };
};

ColorOptions.propTypes = {
    colors: PropTypes.object,
    changeColor: PropTypes.func,
}

export default ColorOptions;