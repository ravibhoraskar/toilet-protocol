import React, { Component, ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToiletState from "./ToiletState";
import Toilet from "./Toilet";
import Person from "./Person";
import Usage from "./Usage";
import PersonType from "./PersonType";
import UsageType from "./UsageType";
import changeState from "./Strategies";

class App extends Component<
  {},
  {
    toiletState: ToiletState;
    lastPerson: PersonType | null;
    lastUsage: UsageType | null;
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      toiletState: ToiletState.Up,
      lastPerson: PersonType.Hombre,
      lastUsage: UsageType.PooPoo,
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
          <Toilet toilet={this.state.toiletState} />
          <br />
          <Person person={this.state.lastPerson} />
          <Usage usage={this.state.lastUsage} />
        </center>
      </div>
    );
  }

  onClick() {
    const person = Math.random() < 0.5 ? PersonType.Hombre : PersonType.Mujer;
    const usage = Math.random() < 0.1 ? UsageType.PooPoo : UsageType.PeePee;

    this.setState({
      lastUsage: usage,
      lastPerson: person,
      toiletState: changeState(person, usage),
    });
  }
}
export default App;
