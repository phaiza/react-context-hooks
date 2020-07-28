import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navig from "./components/Navig";
import BookList from "./components/BookList";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navig />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
