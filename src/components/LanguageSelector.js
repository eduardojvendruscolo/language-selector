import React from "react";

import { MyDiv } from "./styled/MyDiv";
import { Title } from "./styled/Title";
import { CustomImg } from "./styled/CustomImg";

class LanguageSelector extends React.Component {
  render() {
    return (
      <>
        <MyDiv>
          <Title>Select a Language</Title>
        </MyDiv>
        <div style={{ textAlign: "center", margin: "30px" }}>
          <CustomImg
            src="https://www.worldometers.info/img/flags/us-flag.gif"
            onClick={() => this.props.onLanguageChange("english")}
            isSelected={this.props.languageSelected === "english"}
          />

          <CustomImg
            src="https://www.worldometers.info/img/flags/nl-flag.gif"
            onClick={() => this.props.onLanguageChange("dutch")}
            isSelected={this.props.languageSelected === "dutch"}
          />

          <CustomImg
            src="https://www.worldometers.info/img/flags/br-flag.gif"
            onClick={() => this.props.onLanguageChange("portuguese")}
            isSelected={this.props.languageSelected === "portuguese"}
          />
        </div>
      </>
    );
  }
}

export default LanguageSelector;
