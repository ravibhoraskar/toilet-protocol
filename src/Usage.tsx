import React from "react";
import UsageType from "./UsageType";

const Toilet = (props: { usage: UsageType | null }) => {
  switch (props.usage) {
    case UsageType.PooPoo:
      return <div>💩</div>;
    case UsageType.PeePee:
      return <div>💦</div>;
    default:
      return <div />;
  }
};

export default Toilet;
