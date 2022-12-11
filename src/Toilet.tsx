import React from "react";
import ToiletState from "./ToiletState";
import up from "./up.jpeg";
import down from "./down.jpeg";

const Toilet = (props: { toilet: ToiletState }) => {
  switch (props.toilet) {
    case ToiletState.Up:
      return (
        <div>
          <img className="Toilet" src={up} />
        </div>
      );
    case ToiletState.Down:
      return (
        <div>
          <img className="Toilet" src={down} />
        </div>
      );
  }
};

export default Toilet;
