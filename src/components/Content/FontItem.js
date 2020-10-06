import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import {FONT_FAMILY} from "../../constants/styles";

const FONT_WEIGHT = [
        {
            id: "100",
            title: "Light"
        },
        {
            id: "400",
            title: "Regular"
        },
        {
            id: "500",
            title: "Medium"
        },
        {
            id: "700",
            title: "Bold"
        }
];

class FontItem extends Component {

  constructor(props) {
    super(props);
    
  };

  onChangeFamily(e) {
      let font = {
        family: e.target.value,
        size: this.props.fontSize,
        weight: this.props.fontWeight
      }

      this.props.changeFont(font);
  }

  onChangeSize(e) {
    let font = {
      family: this.props.fontFamily,
      size:  e.target.value,
      weight: this.props.fontWeight
    }

    this.props.changeFont(font);
    }

    onChangeWeight(e) {
        let font = {
        family: this.props.fontFamily,
        size: this.props.fontSize,
        weight: e.target.value
        }

        this.props.changeFont(font);
    }

  render() {
        const title = this.props.title;

    return (
        <div class="fi-item">
            <h3>{title}</h3>

            <select class="ft-selector" onChange={(e) => {this.onChangeFamily(e);}}>
            {
                FONT_FAMILY.map((val, index) => (<option selected={(this.props.fontFamily == val.id) ? "selected" : ""} value={val.id}>{val.title}</option>))
            }
            </select>

            <select class="ft-selector" onChange={(e) => {this.onChangeWeight(e);}}>
            {
                FONT_WEIGHT.map((val, index) => (<option selected={(this.props.fontWeight == val.id) ? "selected" : ""} value={val.id}>{val.title}</option>))
            }
            </select>

            <div class="fi-input-field">
                <span>Font</span>
                <input type="range" class="qs-range" min="9" max="50" value={this.props.fontSize} onChange={(e) => {this.onChangeSize(e); }}/>
            </div>
        </div>
    );
  };
};

FontItem.propTypes = {
    title: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    changeFont: PropTypes.func,    
}

export default FontItem;