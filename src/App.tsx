import React, { Component, ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToiletState from "./ToiletState";
import Toilet from "./Toilet";

class App extends Component {

  constructor(props: {}) {
    super(props);
    this.state = {
      toiletState: ToiletState.Up,
      lastPerson: null,
      lastUsage: null,
    };

    this.onClick = this.onClick.bind(this);
  }

  render(): ReactNode {
    return (
      <div className="App">
        <center>
          <button className="GenerateButton" onClick={this.onClick}>
            Next!
          </button>
          <Toilet toilet={this.state.toiletState}/>
        </center>
      </div>
    );
  }

  onClick() {}
}
export default App;
