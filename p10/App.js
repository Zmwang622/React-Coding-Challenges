// import "./styles.css";

const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 3, 5, 7, 4, 2];

const App = () => {
  return <DivideBeforeConquer array={ARRAY} />;
};

const DivideBeforeConquer = ({ array }) => {
  const n = array.length;
  const middle = Math.floor(n / 2);
  const centeredRow = {
    display: "flex",
    fontSize: 30,
    justifyContent: "center"
  };

  const centeredColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5
  };

  return (
    <>
      <p style={centeredRow}>[{array.toString()}]</p>
      {n !== 1 && (
        <div style={centeredRow}>
          <div style={centeredColumn}>
            <DivideBeforeConquer array={array.slice(0, middle)} />
          </div>
          <div style={centeredColumn}>
            <DivideBeforeConquer array={array.slice(middle, n)} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
