import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import RTooltip from "./../components/Content/RTooltip";
import {dispatchHelp} from "../actions/index";

export class Controller extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            is_help: this.props.help,
        }
    }

    onHelp() {
        const is_help = !this.state.is_help;

        this.setState(
            {
                is_help: is_help
            }
        );

        this.props.changeHelp(is_help);
    }
  render() {
    const is_help = this.state.is_help;
    
    return (
        
            <div className={ is_help ? "q-help" : "q-help q-disabled" } onClick={(e) => {this.onHelp();}}>
                <RTooltip icon="help" message="Click to toggle help <b>on/off</b>" position="bottom" >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.25 10.5V24.5C26.25 25.4616 25.2998 26.2605 24.3399 26.2605H3.47725C2.51738 26.2605 1.73863 25.4818 1.73863 24.5201V3.64438C1.73863 2.68275 2.53925 1.75 3.5 1.75H17.5V0H3.5C1.58025 0 0 1.72287 0 3.64438V24.5201C0 26.4425 1.55663 28 3.47725 28H24.3399C26.2605 28 28 26.4215 28 24.5V10.5H26.25Z" fill="#32373C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2807 15.8421V17.3158H15.2281V15.8421C15.2281 15.8457 15.2351 15.838 15.2508 15.8207C15.2895 15.778 15.3812 15.6771 15.553 15.5407C15.7007 15.4236 15.7464 15.3933 16.1194 15.1568C17.3886 14.3522 18.1755 12.953 18.1755 11.4211C18.1755 8.97937 16.1961 7 13.7544 7C11.3127 7 9.33337 8.97937 9.33337 11.4211H12.2807C12.2807 10.6072 12.9405 9.94737 13.7544 9.94737C14.5683 9.94737 15.2281 10.6072 15.2281 11.4211C15.2281 11.9329 14.9666 12.3979 14.5413 12.6675C14.0641 12.97 13.9849 13.0225 13.7213 13.2317C12.8448 13.927 12.2807 14.7555 12.2807 15.8421ZM15.2305 20.2611C15.2305 21.075 14.5705 21.7348 13.7564 21.7348C12.9422 21.7348 12.2822 21.075 12.2822 20.2611C12.2822 19.4472 12.9422 18.7874 13.7564 18.7874C14.5705 18.7874 15.2305 19.4472 15.2305 20.2611Z" fill="#32373C"/>
                </svg>
                </RTooltip>
            </div>
        
    )
  }
};

export const mapStateToProps = store => {
  return {
    help: store.help
  };
};

export const mapDispatchToProps = dispatch => {
    return {
        changeHelp: function(e) {            
            dispatch(dispatchHelp(e));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);


