import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Controller extends Component {
   

  render() {
    return (
        <Fragment>
            <div className={ this.props.loading ? "q-load-wrapper loading" : "q-load-wrapper" }>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </Fragment>
        
    )
  }
};

export const mapStateToProps = store => {
  return {
    loading: store.loading
  };
};

export default connect(mapStateToProps, null)(Controller);
