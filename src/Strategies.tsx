import PersonType from "./PersonType";
import ToiletState from "./ToiletState";
import UsageType from "./UsageType";

type strategyOutput = {
  state: ToiletState;
  flipsByMen: number;
  flipsByWomen: number;
};

function lazy(
  initialState: ToiletState,
  person: PersonType,
  usage: UsageType
): strategyOutput {
  if (person == PersonType.Hombre && usage == UsageType.PeePee) {
    return {
      state: ToiletState.Up,
      flipsByWomen: 0,
      flipsByMen: initialState == ToiletState.Down ? 1 : 0,
    };
  } else if (person == PersonType.Hombre && usage == UsageType.PooPoo) {
    return {
      state: ToiletState.Down,
      flipsByWomen: 0,
      flipsByMen: initialState == ToiletState.Up ? 1 : 0,
    };
  } else {
    return {
      state: ToiletState.Down,
      flipsByWomen: initialState == ToiletState.Up ? 1 : 0,
      flipsByMen: 0,
    };
  }
}

function gentleman(
  initialState: ToiletState,
  person: PersonType,
  usage: UsageType
): strategyOutput {
  return {
    state: ToiletState.Down,
    flipsByWomen: 0,
    flipsByMen:
      usage == UsageType.PeePee && person == PersonType.Hombre ? 2 : 0,
  };
}

function gentlewoman(
  initialState: ToiletState,
  person: PersonType,
  usage: UsageType
): strategyOutput {
  if (person == PersonType.Mujer) {
    return {
      state: ToiletState.Up,
      flipsByWomen: 2,
      flipsByMen: 0,
    };
  } else {
    return {
      state: ToiletState.Up,
      flipsByWomen: 0,
      flipsByMen: usage == UsageType.PooPoo ? 2 : 0,
    };
  }
}

export default {
  LAZY: lazy,
  GENTLEMAN: gentleman,
  GENTLEWOMAN: gentlewoman,
};
