import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const topColors = [
      {left: "blue", middle: "red", right: "orange"},
    ]
    const middleColors = [
      {mleft: "yellow", mmiddle: "green", mright: "purple"},
    ]
    const bottomColors = [
      {bleft: "lightblue", bmiddle: "pink", bright: "silver"},
    ]

    const renderColors = (color) => {
      return(
        <div>
        <tr id="top">
          <td id="tleft">{color.left}</td>
          <td id="tmiddle">{color.middle}</td>
          <td id="tright">{color.right}</td>
        </tr>
        <br></br>
        <tr id="middle">
          <td id="mleft">{color.mleft}</td>
          <td id="mmiddle">{color.mmiddle}</td>
          <td id="mright">{color.mright}</td>
        </tr>
        <br></br>
        <tr id="bottom">
          <td id="bleft">{color.bleft}</td>
          <td id="bmiddle">{color.bmiddle}</td>
          <td id="bright">{color.bright}</td>
        </tr>
        <br></br>
        </div>
        )
    }

    return (
      <div>
      <tbody>{topColors.map(renderColors)}</tbody>
      <tbody>{middleColors.map(renderColors)}</tbody>
      <tbody>{bottomColors.map(renderColors)}</tbody>
      </div>
    );
  }
}

export default App;
