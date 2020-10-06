import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import YNOption from "./YNOption";

const titles = [
    "Toggle ProgressBar",
];

class BGOptions extends Component {
  constructor(props) {
    super(props) 
  };

  changeOption(e, index) {
     
      this.props.changeBackground({
          index: index,
          data: e
      });
  }
  render() {
   
    return (
        <Fragment>
            {
                this.props.background.map((c, index) => (
                    <YNOption index={"cl-0" + index} title={titles[index]} option={c} changeOption={(e) => {this.changeOption(e, index)}}></YNOption>
                ))
            }
        </Fragment>
    );
  };
};

BGOptions.propTypes = {
    background: PropTypes.object,
    changeBackground: PropTypes.func,
}

export default BGOptions;