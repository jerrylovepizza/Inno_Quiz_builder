
import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";

const spacing=[1, 1.15, 1.5, 2, 2.5, 3];

class ParaItem extends Component {

  constructor(props) {
    super(props);
    
  };

  onChange(e) {
    this.props.changePara(
      {
        align: this.props.align,
        spacing: e.target.value,
      }
    )
  }

  onClickAlign(e) {
    this.props.changePara(
      {
        align: e,
        spacing: this.props.spacing,
      }
    )
  }
  render() {
        const title = this.props.title;

    return (
        <div class="fi-item">
            <h3>{title}</h3>
            
            <div class="cl-align">
              <div  className={(this.props.align == "left") ? "cl-a-item active" : "cl-a-item"} onClick={(e) => {this.onClickAlign("left")}}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 17V15H12V17H32ZM26 19V21H12V19H26ZM32 25V23H12V25H32ZM26 29V27H12V29H26Z" fill="#32373C"/>
</svg>

              </div>

              <div className={(this.props.align == "center") ? "cl-a-item active" : "cl-a-item"}  onClick={(e) => {this.onClickAlign("center")}}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 17V15H12V17H32ZM29 19V21H15V19H29ZM32 25V23H12V25H32ZM29 29V27H15V29H29Z" fill="#32373C"/>
</svg>
              </div>

              <div className={(this.props.align == "right") ? "cl-a-item active" : "cl-a-item"}  onClick={(e) => {this.onClickAlign("right")}}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 17V15H12V17H32ZM32 19V21H18V19H32ZM32 25V23H12V25H32ZM32 29V27H18V29H32Z" fill="#32373C"/>
                </svg>
              </div>
            </div>

            <select class="ft-selector" onChange={(e) => {this.onChange(e)}}>
              {spacing.map((val) => (<option selected={(this.props.spacing == val) ? "selected": ""} value={val}>{val}</option>))}              
            </select>
        </div>
    );
  };
};

ParaItem.propTypes = {
    title: PropTypes.string,
    align: PropTypes.string,
    spacing: PropTypes.string,
    changePara: PropTypes.func,    
}

export default ParaItem;