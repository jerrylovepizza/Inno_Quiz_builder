import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class AnswerList extends Component {

  render() {
   const activeid = this.props.activeid;
    const answers = this.props.answers.map((m, index) => (
        <div class={m.correct ? "q-a-item active no-icon" : "q-a-item no-icon"} onClick={() => {this.props.changeCorrect({value: !m.correct, activeid: this.props.activeid, answerid: index});}} key={activeid.toString() + "-" + index.toString()} >{m.title || "Answer " + index}<i class="fa fa-check"></i></div>
    )
    );

    return (
      <Fragment>
        {answers}
      </Fragment>
    );
  }
}

AnswerList.propTypes = {
  answers: PropTypes.object,
  activeid: PropTypes.number,
  changeCorrect: PropTypes.func,
};

export default AnswerList;
