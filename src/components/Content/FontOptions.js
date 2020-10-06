import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import FontItem from "./FontItem";

const titles = [
    "Question Headline",
    "Description",
    "Answer",
    "Button",
    "Label"
];
class FontOptions extends Component {
  constructor(props) {
    super(props) 
  };

  changeFont(e, index) {
      this.props.changeFont({
          index: index,
          font: e
      });
  }
  render() {
    
    return (
        <Fragment>
            {
                this.props.font.map((f, index) => (
                    <FontItem index={"ff-0" + index} title={titles[index]} fontSize={f.size}
                    fontFamily={f.family} fontWeight={f.weight} changeFont={(e) => {this.changeFont(e, index)}}></FontItem>
                ))
            }
        </Fragment>
    );
  };
};

FontOptions.propTypes = {
    font: PropTypes.object,
    changeFont: PropTypes.func,
}

export default FontOptions;