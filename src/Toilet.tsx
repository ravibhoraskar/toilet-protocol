import React from "react";
import ToiletState from "./ToiletState";

const Toilet = (props: { toilet: ToiletState }) => {
  switch (props.toilet) {
    case ToiletState.Up:
      return <div>UP</div>;
    case ToiletState.Down:
      return <div>DOWN</div>;
  }
};

export default Toilet;
