import PersonType from "./PersonType";
import ToiletState from "./ToiletState";
import UsageType from "./UsageType";

function changeState(person: PersonType, usage: UsageType): ToiletState {
  if (person == PersonType.Hombre && usage == UsageType.PeePee) {
    return ToiletState.Up;
  } else {
    return ToiletState.Down;
  }
}
