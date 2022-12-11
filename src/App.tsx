import React, { Component, ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToiletState from "./ToiletState";
import Toilet from "./Toilet";
import Person from "./Person";
import Usage from "./Usage";
import PersonType from "./PersonType";
import UsageType from "./UsageType";
import Strategies from "./Strategies";

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

    this.onClick = this.onClick.bind(this);
    this.onStrategyChange = this.onStrategyChange.bind(this);
    this.onPercentManChange = this.onPercentManChange.bind(this);
    this.onPercentPooPooChange = this.onPercentPooPooChange.bind(this);
  }

  render(): ReactNode {
    return (
      <div className="App">
        <center>
          <table>
            <tr>
              <td> Strategy: </td>
              <td>
                <select
                  name="strategies"
                  id="strategies"
                  onChange={this.onStrategyChange}
                >
                  {Object.keys(Strategies).map((strat) => (
                    <option value={strat} key={strat}>
                      {strat}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Percentage of men:</td>
              <td>
                <input
                  type="number"
                  name="percentMan"
                  onChange={this.onPercentManChange}
                  value={this.state.percentageMan}
                />
              </td>
            </tr>
            <tr>
              <td>Percentage of poopoo:</td>
              <td>
                <input
                  type="number"
                  name="percentPoo"
                  onChange={this.onPercentPooPooChange}
                  value={this.state.percentagePooPoo}
                />
              </td>
            </tr>
          </table>
          <button onClick={this.onClick}>Next!</button>
          <Toilet toilet={this.state.toiletState} />
          <br />
          <Person person={this.state.lastPerson} />
          <Usage usage={this.state.lastUsage} />
          <table>
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
          </table>
        </center>
      </div>
    );
  }

  onClick() {
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
  }

  onStrategyChange(event: { target: { value: string } }) {
    this.setState({
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
      strategy: event.target.value as keyof typeof Strategies,
    });
  }

  onPercentManChange(event: { target: { value: string } }) {
    this.setState({
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
      percentageMan: parseInt(event.target.value),
    });
  }

  onPercentPooPooChange(event: any) {
    this.setState({
      flipsByMen: 0,
      flipsByWomen: 0,
      numRounds: 0,
      percentagePooPoo: parseInt(event.target.value),
    });
  }
}

export default App;
