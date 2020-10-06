import React,  { Component, Fragment }from "react"
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";
import { connect } from "react-redux";

const get_icon = (icon) => {
  switch (icon) {
    case "help":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.25 10.5V24.5C26.25 25.4616 25.2998 26.2605 24.3399 26.2605H3.47725C2.51738 26.2605 1.73863 25.4818 1.73863 24.5201V3.64438C1.73863 2.68275 2.53925 1.75 3.5 1.75H17.5V0H3.5C1.58025 0 0 1.72287 0 3.64438V24.5201C0 26.4425 1.55663 28 3.47725 28H24.3399C26.2605 28 28 26.4215 28 24.5V10.5H26.25Z" fill="#32373C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2807 15.8421V17.3158H15.2281V15.8421C15.2281 15.8457 15.2351 15.838 15.2508 15.8207C15.2895 15.778 15.3812 15.6771 15.553 15.5407C15.7007 15.4236 15.7464 15.3933 16.1194 15.1568C17.3886 14.3522 18.1755 12.953 18.1755 11.4211C18.1755 8.97937 16.1961 7 13.7544 7C11.3127 7 9.33337 8.97937 9.33337 11.4211H12.2807C12.2807 10.6072 12.9405 9.94737 13.7544 9.94737C14.5683 9.94737 15.2281 10.6072 15.2281 11.4211C15.2281 11.9329 14.9666 12.3979 14.5413 12.6675C14.0641 12.97 13.9849 13.0225 13.7213 13.2317C12.8448 13.927 12.2807 14.7555 12.2807 15.8421ZM15.2305 20.2611C15.2305 21.075 14.5705 21.7348 13.7564 21.7348C12.9422 21.7348 12.2822 21.075 12.2822 20.2611C12.2822 19.4472 12.9422 18.7874 13.7564 18.7874C14.5705 18.7874 15.2305 19.4472 15.2305 20.2611Z" fill="#32373C"/>
        </svg>
      );
      break;
    case "image":
      return (
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0.166664H20.5C21.7426 0.166664 22.75 1.13671 22.75 2.33333V19.6667C22.75 20.8633 21.7426 21.8333 20.5 21.8333H2.5C1.25736 21.8333 0.25 20.8633 0.25 19.6667V2.33333C0.25 1.13671 1.25736 0.166664 2.5 0.166664ZM2.5 2.33333V14.8846L7.00001 10.5513L10.9375 14.343L18.25 7.30128L20.5 9.46794V2.33333H2.5ZM2.5 19.6667V17.9488L7.00001 13.6154L13.284 19.6667H2.5ZM20.5 19.6667H16.466L12.5285 15.875L18.25 10.3654L20.5 12.5321V19.6667ZM13.75 6.66666C13.75 4.87174 12.239 3.41666 10.375 3.41666C8.51104 3.41666 7 4.87174 7 6.66666C7 8.46159 8.51104 9.91666 10.375 9.91666C12.239 9.91666 13.75 8.46159 13.75 6.66666ZM9.25 6.66666C9.25 6.06836 9.75368 5.58333 10.375 5.58333C10.9963 5.58333 11.5 6.06836 11.5 6.66666C11.5 7.26497 10.9963 7.75 10.375 7.75C9.75368 7.75 9.25 7.26497 9.25 6.66666Z" fill="#32373C"/>
        </svg>
      );
      break;
    case "delete":
      return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00515 0.577972H12.6132C13.6456 0.577972 14.4826 1.41491 14.4826 2.44733V3.38109H17.2866C18.319 3.38109 19.156 4.21803 19.156 5.25044V7.1198C19.156 8.15222 18.319 8.98916 17.2866 8.98916H17.2119L16.352 19.2724C16.352 20.3048 15.515 21.1418 14.4826 21.1418H5.13582C4.1034 21.1418 3.26646 20.3048 3.26969 19.3501L2.40629 8.98916H2.33176C1.29934 8.98916 0.462402 8.15222 0.462402 7.1198V5.25044C0.462402 4.21803 1.29934 3.38109 2.33176 3.38109H5.1358V2.44733C5.1358 1.41491 5.97274 0.577972 7.00515 0.577972ZM5.1358 5.25137V5.25114H2.33199V7.1205H17.2869V5.25114H14.4826V5.25137H5.1358ZM5.13572 19.2712L4.28188 8.98972H15.3361L14.4857 19.1936L14.4825 19.2712H5.13572ZM12.6125 2.44838V3.38305H7.00443V2.44838H12.6125ZM6.34477 11.5204L7.6666 10.1985L9.80972 12.3417L11.9528 10.1985L13.2747 11.5204L11.1316 13.6635L13.2747 15.8066L11.9528 17.1284L9.80972 14.9853L7.6666 17.1284L6.34477 15.8066L8.48789 13.6635L6.34477 11.5204Z" fill="#23282D"/>
        </svg>
      );
      break;
  }
}

class RTooltip extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        displayTooltip: false
      }

      this.hideTooltip = this.hideTooltip.bind(this)
      this.showTooltip = this.showTooltip.bind(this)
    }
    
    hideTooltip () {
     this.setState({displayTooltip: false})
      
    }
    showTooltip () {
     this.setState({displayTooltip: true})
    }
  
    render() {
      

      let message = this.props.message
      let position = this.props.position
      let disabled = typeof this.props.disabled == "undefined" ? false : this.props.disabled;
      const help = this.props.help;

      if (!help) {
        return (
        <Fragment>
        {this.props.children}
        </Fragment>);
      }

      if (disabled) {
        return (
          <Fragment>{this.props.children}</Fragment>
        )
      }
      return (
        
        <span className="tooltip"
            onMouseLeave={this.hideTooltip}
          >
          {this.state.displayTooltip &&
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div class="tooltip-wrapper">
              {
                this.props.icon ? 
                (<div class="tooltip-icon">
                {get_icon(this.props.icon)}
              </div>)
              :
              (<Fragment></Fragment>)
              }
              
              <ContentEditable
                className={"tooltip-message"}
                html={message}
                disabled={true}             
                tagName="div"            
              />
            </div>
            <div class="arrow"></div>
          </div>
          }
          <span 
            className="tooltip-trigger"
            onMouseOver={this.showTooltip}
            >
            {this.props.children}
          </span>
        </span>
      )
    }
}

RTooltip.propTypes = {
    message: PropTypes.string,    
    position: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    help: PropTypes.bool
};


export const mapStateToProps = store => {
  return {
    help: store.help
  };
};

export default connect(mapStateToProps, null)(RTooltip);
