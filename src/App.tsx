import React, { Component, ReactNode } from "react";
import "./App.css";
import ToiletState from "./ToiletState";
import Toilet from "./Toilet";
import PersonType from "./PersonType";
import UsageType from "./UsageType";
import Strategies from "./Strategies";
import Configuration from "./Configuration";
import LastUsage from "./LastUsage";

class App extends Component<
  {},
  {
    toiletState: ToiletState;
    lastPerson: PersonType;
    lastUsage: UsageType;
    strategy: keyof typeof Strategies;
    percentageMan: number;
    percentagePooPoo: number;
    flipsByMen: number;
    flipsByWomen: number;
    numRounds: number;
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      toiletState: ToiletState.Up,
      lastPerson: PersonType.Hombre,
      lastUsage: UsageType.PooPoo,
      strategy: "LAZY",
      percentageMan: 50,
      percentagePooPoo: 10,
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
    };
  }

  render(): ReactNode {
    return (
      <div className="App">
        <center>
          <Configuration
            onStrategyChange={this.onStrategyChange}
            selectedStrategy={this.state.strategy}
            onPercentManChange={this.onPercentManChange}
            percentageMan={this.state.percentageMan}
            onPercentPooPooChange={this.onPercentPooPooChange}
            percentagePooPoo={this.state.percentagePooPoo}
          />
          <button onClick={this.onClick}>Do it!</button>
          <Toilet toilet={this.state.toiletState} />
          <LastUsage
            person={this.state.lastPerson}
            usage={this.state.lastUsage}
          />
          <table>
            <tbody>
              <tr>
                <td>Flips by Men:</td>
                <td> {this.state.flipsByMen}</td>
              </tr>
              <tr>
                <td>Flips by Women:</td>
                <td> {this.state.flipsByWomen}</td>
              </tr>
              <tr>
                <td>Total Flips:</td>
                <td> {this.state.flipsByWomen + this.state.flipsByMen}</td>
              </tr>
              <tr>
                <td>Number of rounds:</td>
                <td> {this.state.numRounds}</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }

  onClick = () => {
    const person =
      Math.random() * 100 < this.state.percentageMan
        ? PersonType.Hombre
        : PersonType.Mujer;
    const usage =
      Math.random() * 100 < this.state.percentagePooPoo
        ? UsageType.PooPoo
        : UsageType.PeePee;
    const runStrategy = Strategies[this.state.strategy];
    const strategyOutput = runStrategy(this.state.toiletState, person, usage);
    this.setState({
      lastUsage: usage,
      lastPerson: person,
      toiletState: strategyOutput.state,
      flipsByMen: this.state.flipsByMen + strategyOutput.flipsByMen,
      flipsByWomen: this.state.flipsByWomen + strategyOutput.flipsByWomen,
      numRounds: this.state.numRounds + 1,
    });
  };

  onStrategyChange = (event: { target: { value: string } }) => {
    this.setState({
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
      strategy: event.target.value as keyof typeof Strategies,
    });
  };

  onPercentManChange = (event: { target: { value: string } }) => {
    this.setState({
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
      percentageMan: parseInt(event.target.value) || 0,
    });
  };

  onPercentPooPooChange = (event: { target: { value: string } }) => {
    this.setState({
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
      percentagePooPoo: parseInt(event.target.value) || 0,
    });
  };
}

export default App;
