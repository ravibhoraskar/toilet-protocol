import React from "react";
import Strategies from "./Strategies";

const Configuration = (props: {
  onStrategyChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectedStrategy: keyof typeof Strategies;
  onPercentManChange: React.ChangeEventHandler<HTMLInputElement>;
  percentageMan: number;
  onPercentPooPooChange: React.ChangeEventHandler<HTMLInputElement>;
  percentagePooPoo: number;
}) => (
  <table>
    <tbody>
      <tr>
        <td> Strategy: </td>
        <td>
          <select
            name="strategies"
            id="strategies"
            onChange={props.onStrategyChange}
            value={props.selectedStrategy}
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
            onChange={props.onPercentManChange}
            value={props.percentageMan}
          />
        </td>
      </tr>
      <tr>
        <td>Percentage of poopoo:</td>
        <td>
          <input
            type="number"
            name="percentPoo"
            onChange={props.onPercentPooPooChange}
            value={props.percentagePooPoo}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export default Configuration;
