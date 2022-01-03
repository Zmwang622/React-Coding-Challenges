import { useState } from "react";

const LADDER_IMAGE =
  "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";

function App() {
  return <Ladder img={LADDER_IMAGE} n={5} />;
}

const Ladder = ({ img, n }) => {
  const [hoverLadder, setHoverLadder] = useState(-1);
  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column"
      }}
    >
      {[...Array(n)].map((v, idx) => {
        return (
          <img
            src={img}
            style={
              hoverLadder === idx
                ? { width: "20%", height: "auto" }
                : { width: "10%", height: "auto" }
            }
            alt={"ladder"}
            onMouseEnter={() => {
              setHoverLadder(idx);
            }}
            onMouseLeave={() => {
              setHoverLadder(-1);
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
