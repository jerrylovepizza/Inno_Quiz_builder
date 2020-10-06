import React, { Component } from "react";
import OptionsPanel from "../components/OptionsPanel";
import {dispatchOptions} from "../actions/index";
import { connect } from "react-redux";

export class Controller extends Component {
  render() {
    
    return (
        <OptionsPanel {...this.props}/>
    )
  }
};

const mapStateToProps = store => {

  return {
    options: store.options    
  };

};

const mapDispatchToProps = dispatch => {
    return {    
        changeOptions: (e) => {
          dispatch(dispatchOptions(e));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
