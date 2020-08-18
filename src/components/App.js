import React from "react";

import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

import { MyDiv } from "./styled/MyDiv";

import { LanguageStore } from "../contexts/LanguageContext";
import ColorContet from "../contexts/ColorContext";

class App extends React.Component {
  render() {
    return (
      <>
        <LanguageStore>
          <LanguageSelector />
          <div className="ui container">
            <MyDiv>
              <ColorContet.Provider value="red">
                <UserCreate />
              </ColorContet.Provider>
            </MyDiv>
          </div>
        </LanguageStore>
      </>
    );
  }
}

export default App;
