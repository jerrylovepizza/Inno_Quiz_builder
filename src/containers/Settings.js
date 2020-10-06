import React, { Component } from "react";
import { connect } from "react-redux";
import SettingsPanel from "../components/SettingsPanel";
import {dispatchChangeFont, dispatchRestoreDefault, dispatchColor, dispatchParagraph, dispatchBackground} from "../actions/index";


export class Controller extends Component {

    
    render() {
        return (
            <SettingsPanel {...this.props}></SettingsPanel>
        )   
    }
};

export const mapStateToProps = store => {
  return {
    settings: store.settings
  };
};

export const mapDispatchToProps = (dispatch, state) => {
    
    return {
        changeFont: (e) => {
            dispatch(dispatchChangeFont(e));
        },
        restoreStyles: (e) => {
            dispatch(dispatchRestoreDefault(e));
        }, 
        changeColor: (e) => {
            dispatch(dispatchColor(e));
        },
        changeParagraph: (e) => {
            dispatch(dispatchParagraph(e));
        },
        changeBackground: (e) => {
            dispatch(dispatchBackground(e));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
