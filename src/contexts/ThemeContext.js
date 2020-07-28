import React, { createContext, Component } from "react";

// define data

//
// create a new context
export const ThemeContext = createContext();

//this class component has data we want ot share with other
//components

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    lightTheme: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
      fontfam: "Open Sans",
    },
    darkTheme: { syntax: "#ddd", ui: "#333", bg: "#555", fontfam: "Roboto" },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
