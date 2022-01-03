import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [input, setInput] = useState("");
  const [robotList, setRobotList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setRobotList([...robotList, input]);
    setInput("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif"
      }}
    >
      <h2> Robot List </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            placeholder={"Generate Robot"}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {robotList.map((roboString) => {
          return (
            <img
              onClick={() => {
                setRobotList(robotList.filter((r) => r != roboString));
              }}
              src={`https://robohash.org/${roboString}`}
              alt={`Robot generated with following string - ${roboString}`}
              style={{
                cursor: "pointer"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
