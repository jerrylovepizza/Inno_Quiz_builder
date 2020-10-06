import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import SettingOption from "./Content/SettingOption";
import FontOptions from "./Content/FontOptions";
import ColorOptions from "./Content/ColorOptions";
import ParagraphOptions from "./Content/ParagraphOptions";
import BGOptions from "./Content/BGOptions";

class SettingsPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: "Fonts",
        }
    }
    onChange(e) {
        
        this.setState({
            selected: e
        });
    }

    onRestore(e) {
        this.props.restoreStyles(this.state.selected);
    }

    render() {
        const option = this.state.selected;
   
        return (
            <div id="settings_panel">
                <div class="settings-wrapper">
                    <SettingOption change={(e) => {this.onChange(e);}}></SettingOption>
                    <div class="settings-field">
                        {
                            (option == "Fonts") ?
                            (<FontOptions font={this.props.settings.font} changeFont={this.props.changeFont}></FontOptions>) :
                            (<Fragment></Fragment>)
                        }

                        {
                            (option == "Paragraph") ?
                            (<ParagraphOptions paragraph={this.props.settings.paragraph} changePara={this.props.changeParagraph}></ParagraphOptions>) :
                            (<Fragment></Fragment>)
                        }

                        {
                            (option == "Colors") ?
                            (<ColorOptions colors={this.props.settings.color} changeColor={this.props.changeColor}></ColorOptions>) :
                            (<Fragment></Fragment>)
                        }

                        {
                            (option == "Background") ?
                            (<BGOptions background={this.props.settings.background} changeBackground = {this.props.changeBackground}></BGOptions>) :
                            (<Fragment></Fragment>)
                        }

                        <div class="button-wrapper">
                            <button class="s-btn" onClick={(e) => {this.onRestore(e); }}>Restore To Default</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

SettingsPanel.propTypes = {   
    settings: PropTypes.object,
    changeFont: PropTypes.func,
    changeColor: PropTypes.func,
    changeParagraph: PropTypes.func,
    changeBackground: PropTypes.func,
    restoreStyles: PropTypes.func,   
};

export default SettingsPanel;
