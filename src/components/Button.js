import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    let text;

    switch (this.context) {
      case "english":
        text = "Submit";
        break;

      case "dutch":
        text = "Voorloggen";
        break;

      case "portuguese":
        text = "Submeter";
        break;

      default:
        break;
    }

    return (
      <ColorContext.Consumer>
        {(color) => {
          console.log(color);
          return <button className={`ui button ${color}`}>{text}</button>;
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
