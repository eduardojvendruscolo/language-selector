import React, { Suspense } from "react";

import { MyDiv } from "./styled/MyDiv";
import { Title } from "./styled/Title";
import { CustomImg, CustomImgLoading } from "./styled/CustomImg";

import LanguageContextX from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContextX;

  suspenseTest = (x) => {
    setTimeout((x) => x, 5000);
  };

  render() {
    return (
      <>
        <MyDiv>
          <Title>Select a Language</Title>
        </MyDiv>
        <div style={{ textAlign: "center", margin: "30px" }}>
          <Suspense fallback={<h1>Loading...</h1>}></Suspense>

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

          <CustomImgLoading />
        </div>
      </>
    );
  }
}

export default LanguageSelector;
