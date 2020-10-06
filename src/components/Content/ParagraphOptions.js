import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import PraItem from "./PraItem";

const titles = [
    "Question Headline",
    "Description",
    "Answer"   
];

class ParagraphOptions extends Component {
  constructor(props) {
    super(props) 
  };

  changePara(e, index) {      
      this.props.changePara({
          index: index,
          paragraph: e
      });
  }
  render() {

    return (
        <Fragment>
            {
                this.props.paragraph.map((c, index) => (
                    <PraItem index={"para-0" + index} title={titles[index]} align={c.align} spacing={c.spacing} changePara={(e) => {this.changePara(e, index)}}></PraItem>
                ))
            }
        </Fragment>
    );
  };
};

ParagraphOptions.propTypes = {
    paragraph: PropTypes.object,
    changePara: PropTypes.func,
}

export default ParagraphOptions;