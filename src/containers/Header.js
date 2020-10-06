import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createPost, readPost} from "../actions/index";
import {quizChangeTitle} from "../actions/quizActions";

const getTabHead = (e) => {
  switch (e) {
    case 2: 
      return (<Fragment>
        <div class="h-icon">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.4905 7.73141H24.654V24.7408H18.4905V7.73141Z" fill="#32373C"/>
        <path d="M9.2446 2.67029e-05H15.4081V24.741H9.2446V2.67029e-05Z" fill="#32373C"/>
        <path d="M0 12.3706H6.16354V24.7411H0V12.3706Z" fill="#32373C"/>
        </svg>
        </div><span>RESULTS</span></Fragment>);
    break;

    case 3:
      return (
        <Fragment>
        <div class="h-icon"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5489 22.017L21.991 19.5749L21.1309 16.4503L21.5057 15.5553L24.3334 13.9597V10.5063L21.5137 8.90395L21.1453 8.01062L22.0162 4.88435L19.5723 2.44407L16.4474 3.30391L15.5545 2.92953L13.9587 0.101471H10.5052L8.90293 2.92123L8.0098 3.28958L4.88404 2.41761L2.44402 4.85763L3.304 7.98308L2.92962 8.87599L0.101562 10.4718V13.9242L2.91878 15.5301L3.28753 16.4242L2.41677 19.55L4.85772 21.9909L7.98318 21.1309L8.87619 21.5053L10.472 24.3322H13.9246L15.5293 21.5149L16.4232 21.1463L19.5489 22.017ZM19.7653 14.008L18.805 16.3013L19.5268 18.9237L18.9008 19.5497L16.284 18.8208L13.9896 19.767L12.644 22.1294H11.758L10.4236 19.7655L8.13274 18.805L5.50899 19.5269L4.88399 18.9019L5.61295 16.2851L4.66677 13.9909L2.30436 12.6443V11.7582L4.66928 10.4237L5.62985 8.13277L4.90791 5.50903L5.53162 4.88532L8.14839 5.6153L10.4436 4.66872L11.7871 2.3044H12.6722L14.0067 4.66932L16.2976 5.62989L18.9219 4.90781L19.5485 5.53347L18.8196 8.14974L19.7661 10.4447L22.1304 11.7882V12.6734L19.7653 14.008ZM12.2174 16.6232C9.78415 16.6232 7.81161 14.6507 7.81161 12.2174C7.81161 9.78419 9.78415 7.81164 12.2174 7.81164C14.6507 7.81164 16.6232 9.78419 16.6232 12.2174C16.6232 14.6507 14.6507 16.6232 12.2174 16.6232ZM14.4203 12.2174C14.4203 13.4341 13.434 14.4203 12.2174 14.4203C11.0008 14.4203 10.0145 13.4341 10.0145 12.2174C10.0145 11.0008 11.0008 10.0145 12.2174 10.0145C13.434 10.0145 14.4203 11.0008 14.4203 12.2174Z" fill="#32373C"/>
</svg></div><span>INTEGRATION</span></Fragment>
      );
    break;

    case 1:
      return (
      <Fragment>
        <div class="h-icon">
          <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4126 0V10.2575H16.4119L16.4119 12.3031C16.4209 13.8646 15.5497 14.3588 13.1207 15.0867C11.697 15.5133 11.2832 15.7477 11.2832 15.8992C11.2832 16.6865 11.3553 17.2152 11.509 17.8301C11.4793 17.7112 11.6545 18.3886 11.6932 18.5691C11.7612 18.8866 11.7961 19.1756 11.7961 19.4893C11.7961 21.1929 10.1935 22.5665 8.20597 22.5665C6.21841 22.5665 4.61586 21.1929 4.61586 19.4893C4.61586 19.1756 4.65073 18.8866 4.71876 18.5691C4.75745 18.3886 4.93265 17.7112 4.90292 17.8301C5.05664 17.2152 5.12873 16.6865 5.12873 15.8992C5.12873 15.7466 4.71609 15.5128 3.29537 15.0866C0.869538 14.3588 0 13.8661 0 12.309V8.20606H0.000666182V0H16.4126ZM14.3599 10.2575H2.05097V12.3089C2.05097 12.4614 2.46362 12.6953 3.88434 13.1215C6.31017 13.8492 7.1797 14.342 7.1797 15.899C7.1797 16.864 7.08512 17.5576 6.89264 18.3275C6.911 18.2541 6.7523 18.8677 6.7242 18.9989C6.68468 19.1833 6.66683 19.3312 6.66683 19.4891C6.66683 19.9835 7.28673 20.5149 8.20545 20.5149C9.12417 20.5149 9.74407 19.9835 9.74407 19.4891C9.74407 19.3312 9.72622 19.1833 9.6867 18.9989C9.6586 18.8677 9.49991 18.2541 9.51826 18.3275C9.32578 17.5576 9.2312 16.864 9.2312 15.899C9.2312 14.3427 10.1024 13.8492 12.5269 13.1227L12.5313 13.1214C13.9501 12.6962 14.3608 12.4633 14.3599 12.3089L14.3599 10.2575ZM2.05156 8.20604V2.05156H4.10293V6.15461H6.15442V2.05156H8.20606V5.12887H10.2576V2.05156H14.3605V8.20604H2.05156Z" fill="#32373C"/>
</svg>
        </div><span>DESIGN</span></Fragment>
      );
    break;

    case 4: 
      return (<Fragment>
        <div class="h-icon">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1133 20.102V1.54631C23.1133 0.69584 22.4199 0 21.5724 0H1.54089C0.693399 0 0 0.69584 0 1.54631V20.102C0 20.9525 0.693399 21.6484 1.54089 21.6484H21.5724C22.4199 21.6484 23.1133 20.9525 23.1133 20.102ZM7.70597 12.3711H9.24686C10.0943 12.3711 10.7877 13.0669 10.7877 13.9174C10.7877 14.7679 10.0943 15.4637 9.24686 15.4637H7.70597V17.7832C7.70597 18.2162 7.36698 18.5563 6.93553 18.5563C6.50408 18.5563 6.16509 18.2162 6.16509 17.7832V15.4637H4.6242C3.77671 15.4637 3.08332 14.7679 3.08332 13.9174C3.08332 13.0669 3.77671 12.3711 4.6242 12.3711H6.16509V3.86638C6.16509 3.43341 6.50408 3.09322 6.93553 3.09322C7.36698 3.09322 7.70597 3.43341 7.70597 3.86638V12.3711ZM15.4097 9.27847H13.8688C13.0213 9.27847 12.3279 8.58263 12.3279 7.73216C12.3279 6.88169 13.0213 6.18585 13.8688 6.18585H15.4097V3.86638C15.4097 3.43341 15.7487 3.09322 16.1801 3.09322C16.6116 3.09322 16.9506 3.43341 16.9506 3.86638V6.18585H18.4915C19.3389 6.18585 20.0323 6.88169 20.0323 7.73216C20.0323 8.58263 19.3389 9.27847 18.4915 9.27847H16.9506V17.7832C16.9506 18.2162 16.6116 18.5563 16.1801 18.5563C15.7487 18.5563 15.4097 18.2162 15.4097 17.7832V9.27847Z" fill="white"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="22">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1133 20.102V1.54631C23.1133 0.69584 22.4199 0 21.5724 0H1.54089C0.693399 0 0 0.69584 0 1.54631V20.102C0 20.9525 0.693399 21.6484 1.54089 21.6484H21.5724C22.4199 21.6484 23.1133 20.9525 23.1133 20.102ZM7.70597 12.3711H9.24686C10.0943 12.3711 10.7877 13.0669 10.7877 13.9174C10.7877 14.7679 10.0943 15.4637 9.24686 15.4637H7.70597V17.7832C7.70597 18.2162 7.36698 18.5563 6.93553 18.5563C6.50408 18.5563 6.16509 18.2162 6.16509 17.7832V15.4637H4.6242C3.77671 15.4637 3.08332 14.7679 3.08332 13.9174C3.08332 13.0669 3.77671 12.3711 4.6242 12.3711H6.16509V3.86638C6.16509 3.43341 6.50408 3.09322 6.93553 3.09322C7.36698 3.09322 7.70597 3.43341 7.70597 3.86638V12.3711ZM15.4097 9.27847H13.8688C13.0213 9.27847 12.3279 8.58263 12.3279 7.73216C12.3279 6.88169 13.0213 6.18585 13.8688 6.18585H15.4097V3.86638C15.4097 3.43341 15.7487 3.09322 16.1801 3.09322C16.6116 3.09322 16.9506 3.43341 16.9506 3.86638V6.18585H18.4915C19.3389 6.18585 20.0323 6.88169 20.0323 7.73216C20.0323 8.58263 19.3389 9.27847 18.4915 9.27847H16.9506V17.7832C16.9506 18.2162 16.6116 18.5563 16.1801 18.5563C15.7487 18.5563 15.4097 18.2162 15.4097 17.7832V9.27847Z" fill="white"/>
</mask>
<g mask="url(#mask0)">
<rect x="-34.2957" y="-40.0711" width="80" height="80.2817" fill="#32373C"/>
</g>
</svg></div><span>SETTINGS</span></Fragment>);
      break;
  }
};

export class Controller extends Component {
    
    componentDidMount() {
        // console.log("load");
        this.props.readPost();
    }

    savePost() {
        
        let data = {
            quiz: this.props.quiz,
            questions: this.props.questions,  
            result: this.props.result,
            mails: this.props.mailer.mails, 
            settings: this.props.settings,
            options: this.props.options, 
            rule: this.props.rule,    
        }

        this.props.savePost(data);
    }

    exitBuilder() {
        window.location.replace(window.redirect_page);
    }


    changeTitle(e) {
      if (e.target.value) {
        this.props.changeTitle(e.target.value);
      }
    }

  render() {
    const className = this.props.activeid.status;

    const headerl = (this.props.tabIndex == 0) ? (
        <Fragment>
                  <input type="text" class="quiz-title" value={this.props.quiz} placeholder="New Quiz" onChange={(e) =>{this.changeTitle(e);}}></input>
                  <span class="qt-count">Questions ({(this.props.questions.length > 1) ? this.props.questions.length : 1})</span></Fragment>
    ) : getTabHead(this.props.tabIndex);

    return (
          <Fragment>
            <div className={"header-navigator " + className }>
              <div className={this.props.tabIndex > 0 ? "header-left header-flex" : "header-left"}>
                {headerl}                
              </div>
              <div class="header-right">
                <div class="qt-design-icon">
                  
                </div>
                
                <div class="btn-area">
                  <a class="s-btn s-btn-normal"  onClick={() => {this.savePost(); }}>Save</a>
                  <a class="s-btn s-btn-normal" onClick={() => {this.exitBuilder(); }}>Exit</a>
                </div>

                
              </div>
              </div>
          </Fragment>
    )
  }
};

Controller.propTypes = {
    tabIndex: PropTypes.number,
}

export const mapStateToProps = store => {
  return {
    quiz: store.quiz,
    questions: store.questions,
    activeid: store.activate,
    result: store.result,
    mailer: store.mailer,
    settings: store.settings,
    options: store.options,
    rule: store.rule,
  };
};

export const mapDispatchToProps = dispatch => {
    return {
        savePost: (data) => {
            dispatch(createPost(data));
            //console.log(title, data)
        },
        readPost: () => {
            dispatch(readPost());
        },
        changeTitle: (e) => {
          dispatch(quizChangeTitle(e));
        }
        //
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
