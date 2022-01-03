import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.scss";

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  const [activityList, setActivityList] = useState([]);
  const [busyWaiting, setBusyWaiting] = useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ fontFamily: "sans-serif" }}>Activity List</h2>
      <input
        type="button"
        onClick={async () => {
          setBusyWaiting(true);
          const activity = await axios.get(
            "https://www.boredapi.com/api/activity"
          );
          setActivityList([...activityList, activity.data]);
          setBusyWaiting(false);
        }}
        disabled={busyWaiting}
        value="Generate an Activity"
      />
      <div className="wrapper">
        {activityList.map((activity) => {
          return <ExpandableListItem item={activity} key={activity.key} />;
        })}
      </div>
    </div>
  );
};

const ExpandableListItem = ({ item }) => {
  const activityProps = Object.entries(item).filter(
    (entry) => entry[0] !== "activity"
  );
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="card"
      onClick={(e) => {
        setExpanded(!expanded);
      }}
    >
      <p className="card_title">{item.activity}</p>
      <div className="card_desc">
        {expanded &&
          activityProps.map(([prop, value]) => {
            return value ? <p key={prop}>{`${prop}: ${value}`}</p> : "";
          })}
      </div>
      <input
        className="card_btn"
        type="button"
        value={expanded ? "Collapse" : "Expand"}
      />
    </div>
  );
};

export default App;
