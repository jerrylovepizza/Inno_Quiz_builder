import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";

class SettingOption extends Component {

  constructor(props) {
    super(props);

    this.state = {
        items: [
            "Fonts",
            "Paragraph",
            "Colors",
            "Progress Bar"
        ]
    }
  };

  onChange(e) {
    if (e == "Progress Bar")
      e = "Background";
    this.props.change(e);    
  }
  
  render() {        
  const  items = this.state.items.map((val, index) => (<div class="so-item" onClick={(e) => {this.onChange(val);}}>{val}</div>));
    return (
        <div class="setting-option">           
            {items}
        </div>
    );
  };
};

SettingOption.propTypes = {
  change: PropTypes.func
}

export default SettingOption;