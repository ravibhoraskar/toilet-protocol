import React from "react";
import PersonType from "./PersonType";

const Toilet = (props: { person: PersonType | null }) => {
  switch (props.person) {
    case PersonType.Hombre:
      return <div>👨</div>;
    case PersonType.Mujer:
      return <div>👩</div>;
    default:
      return <div />;
  }
};

export default Toilet;
