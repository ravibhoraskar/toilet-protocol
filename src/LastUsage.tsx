import PersonType from "./PersonType";
import UsageType from "./UsageType";

const LastUsage = (props: { person: PersonType; usage: UsageType }) => (
  <div className="LastUsage">
    {props.person === PersonType.Hombre ? <span>👨🏻</span> : <span>💃</span>}
    {props.usage === UsageType.PeePee ? <span>💦</span> : <span>💩</span>}
  </div>
);

export default LastUsage;
