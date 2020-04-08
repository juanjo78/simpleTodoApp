import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  rootElement
);
