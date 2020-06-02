import React from "react";

import { MyDiv } from "./styled/MyDiv";
import { Title } from "./styled/Title";
import { CustomImg } from "./styled/CustomImg";

import LanguageContextX from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContextX;

  render() {
    return (
      <>
        <MyDiv>
          <Title>Select a Language</Title>
        </MyDiv>
        <div style={{ textAlign: "center", margin: "30px" }}>
          <CustomImg
            src="https://www.worldometers.info/img/flags/us-flag.gif"
            onClick={() => this.context.onLanguageChange("english")}
            isSelected={this.context.language === "english"}
          />

          <CustomImg
            src="https://www.worldometers.info/img/flags/nl-flag.gif"
            onClick={() => this.context.onLanguageChange("dutch")}
            isSelected={this.context.language === "dutch"}
          />

          <CustomImg
            src="https://www.worldometers.info/img/flags/br-flag.gif"
            onClick={() => this.context.onLanguageChange("portuguese")}
            isSelected={this.context.language === "portuguese"}
          />
        </div>
      </>
    );
  }
}

export default LanguageSelector;
