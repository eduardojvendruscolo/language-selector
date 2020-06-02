import React from "react";

import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

import { MyDiv } from "./styled/MyDiv";
import { Title } from "./styled/Title";

import LanguageContext from "../contexts/LanguageContext";
import ColorContet from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <>
        <LanguageSelector
          languageSelected={this.state.language}
          onLanguageChange={this.onLanguageChange}
        />
        <div className="ui container">
          <MyDiv>
            <Title>{this.state.language}</Title>

            <ColorContet.Provider value="red">
              <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
              </LanguageContext.Provider>
            </ColorContet.Provider>
          </MyDiv>
        </div>
      </>
    );
  }
}

export default App;
