import React,  { Component }from "react"
import PropTypes from "prop-types";
import {customMediaLibrary} from "../../module/mediaupload";

class LogoLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {value: this.props.value, img: this.props.img};
    this.align = [
        {
            value: "top-left"            
        },
        {
            value: "top-center",
        },
        {
            value: "top-right",
        },
        {
            value: "bottom-left",
        },
        {
            value: "bottom-center",
        },
        {
            value: "bottom-right",
        }
    ];

  };

  onChangeItem(val) {
    this.setState({
        value: val
    });

    this.props.change({
        align: val,
        img: this.state.img
    });
  }

  onAddImage(val) {
    var self = this;

    customMediaLibrary.off("close").on("close",function() {
        try {
            let attachment = customMediaLibrary.state().get("selection").first().toJSON();
            
            if ( ! attachment ) return;
            
            //console.log(attachment.url);

            self.props.change({         
                img: attachment.url
            });
        } catch(Exception) {
            return false;
        }
      
    });
    
    // customMediaLibrary.on( "select",function() {
    //     var state = frame.state();
    //     var selection = state.get("selection");
    //     if ( ! selection ) return;
    
    //     console.log(selection);
    // });
    
    customMediaLibrary.open();
    
  }

  render = () => {
      const value = this.state.value;

      const q_content = this.align.map((a, index) => (
        <div class={value && a.value == value ? "active q-pl-item q-l-item" : "q-pl-item q-l-item"} key={`${a}`} index={`${a}${index}`} onClick={(e) => {this.onChangeItem(a.value)}} >
            <div class={a.value + " q-logo-align"} >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0H1.00002C0.44774 0 2.47955e-05 0.431132 2.47955e-05 0.962961V8.66665C2.47955e-05 9.19847 0.44774 9.62961 1.00002 9.62961H9C9.55229 9.62961 10 9.19847 10 8.66665V0.962961C10 0.431132 9.55229 0 9 0ZM8.99902 0.96302V6.54038L6.99997 4.61537L5.24991 6.30061L1.99996 3.17103L0.999043 4.13488V0.96302H8.99902ZM8.99902 8.6667V7.90222L6.99997 5.9772L4.20703 8.6667H8.99902ZM0.999043 8.6667H2.79282L4.54281 6.98153L1.99996 4.53287L0.999043 5.49671V8.6667ZM4 2.88891C4 2.09116 4.67157 1.44447 5.5 1.44447C6.32842 1.44447 6.99999 2.09116 6.99999 2.88891C6.99999 3.68665 6.32842 4.33335 5.5 4.33335C4.67157 4.33335 4 3.68665 4 2.88891ZM5.99902 2.88883C5.99902 2.62291 5.77517 2.40735 5.49902 2.40735C5.22288 2.40735 4.99902 2.62291 4.99902 2.88883C4.99902 3.15474 5.22288 3.37031 5.49902 3.37031C5.77517 3.37031 5.99902 3.15474 5.99902 2.88883Z" fill="#DADADA"/>
                </svg>
            </div>
        </div>
      ));

    return (
        <div class="q-page-layout">
            <div class="q-pl-title">
                <span>Logo</span>
                <span class="img_edit" onClick={(e) => {this.onAddImage();}}>EDIT</span>
                <span><svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2.16675H22.5C23.7426 2.16675 24.75 3.1368 24.75 4.33341V21.6667C24.75 22.8634 23.7426 23.8334 22.5 23.8334H4.5C3.25736 23.8334 2.25 22.8634 2.25 21.6667V4.33341C2.25 3.1368 3.25736 2.16675 4.5 2.16675ZM4.5 4.33341V16.8847L9.00001 12.5514L12.9375 16.343L20.25 9.30137L22.5 11.468V4.33341H4.5ZM4.5 21.6667V19.9488L9.00001 15.6155L15.284 21.6667H4.5ZM22.5 21.6667H18.466L14.5285 17.8751L20.25 12.3655L22.5 14.5322V21.6667ZM15.75 8.66675C15.75 6.87182 14.239 5.41675 12.375 5.41675C10.511 5.41675 9 6.87182 9 8.66675C9 10.4617 10.511 11.9167 12.375 11.9167C14.239 11.9167 15.75 10.4617 15.75 8.66675ZM11.25 8.66675C11.25 8.06844 11.7537 7.58341 12.375 7.58341C12.9963 7.58341 13.5 8.06844 13.5 8.66675C13.5 9.26506 12.9963 9.75008 12.375 9.75008C11.7537 9.75008 11.25 9.26506 11.25 8.66675Z" fill="#32373C"/>
                    </svg>
                </span>
            </div>
            <div class="q-pl-content">
                {q_content}
            </div>
        </div>
    )
  };
};

LogoLayout.propTypes = {
    value: PropTypes.string,
    img: PropTypes.string,
    change: PropTypes.func,
    className: PropTypes.string,
}
export default LogoLayout;