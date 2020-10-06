import React, { Component, Fragment,PureComponent  } from "react";
import PropTypes from "prop-types";

class RSelect extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            active: false,
        }

    }

    handleClick = (e) => {

        this.setState({values: e.currentTarget.innerText, active: false})

        if (typeof this.props.onChange !== "undefined") {
            this.props.onChange(e.currentTarget.dataset.value, this.props.id)
        }

    };

    toggleActive = () => {

        this.setState({active: ! this.state.active})

    };

    render() {

        return (

            <div className={"select" + (this.state.active ? " select-active" : " select-deactive") + (typeof this.props.value !== "undefined" && this.props.value.length ? " selected" : "")}>
						
								<div className="select__label">
									
									<p>{this.props.label}</p>
									
								</div>

                <div className="select__value" onClick={this.toggleActive}>

                    <p>{this.props.value}</p>

                </div>

                <div className="select__options">

                    {this.props.options.map((option) => {

                        let type = option.constructor === String ? "String" : option.constructor === Object ? "Object" : false

                        option = type == "String" ? {[option]: option} : option

                        return type ? <div className={"select__option" + (this.props.value == option[Object.keys(option)[0]] ? " select__option-active" : "")} onClick={this.handleClick} data-value={option[Object.keys(option)[0]]} key={option[Object.keys(option)[0]]}>{Object.keys(option)[0]}</div> : ""

                    })}

                </div>
						
								<div className="select__trigger" onClick={this.toggleActive}>
										
								</div>

            </div>

        )

    }

}


RSelect.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.Object,
    value: PropTypes.String
};


export default RSelect;