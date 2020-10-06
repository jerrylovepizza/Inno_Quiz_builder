import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProgressBar extends Component {
    
    constructor(props) {
        super(props);        
    }
    
    render() {

        const is_show = this.props.progress[0].option;

        const progress = this.props.activate / this.props.total * 100;

        let label = (
            <span>{progress.toFixed()}%</span>
        );

        if (!is_show) {
            return (
            <Fragment></Fragment>)
        }

        return (
            <div class="qs-progress-bar-wrapper">
                <div class="qs-progress-bar">
                    <span class="qs-progress" style={{width: progress + "%" }}></span>
                </div>
                <span class="qs-ps-title">
                    {label}                    
                </span>
            </div>
        )
    }
}

ProgressBar.propTypes = {
    total: PropTypes.number,
    activate: PropTypes.number,
};

export const mapStateToProps = store => {

  return {    
    progress: store.settings.background
  };
};



export default connect(mapStateToProps, null)(ProgressBar);
