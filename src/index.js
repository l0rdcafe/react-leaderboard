import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.css";

ReactDOM.render(<App apiroot="https://omdbapi.com/?apiKey=843baf87" />, document.getElementById("root"));
