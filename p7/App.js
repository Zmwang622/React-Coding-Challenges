import React, { useEffect, useState, useRef } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [inputList, setInputList] = useState([]);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalText, setModalText] = useState("");

  const modalRef = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (
        modalStatus &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setModalStatus(false);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [modalStatus]);

  return (
    <>
      {modalStatus && (
        <div
          ref={modalRef}
          style={{
            backgroundColor: "black",
            color: "white",
            width: 600,
            height: 600,
            textAlign: "center",
            fontFamily: "sans-serif",
            position: "absolute",
            paddingTop: "25px"
          }}
        >
          {modalText}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputList([...inputList, userInput]);
          setUserInput("");
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          disabled={modalStatus}
        />
      </form>
      <div>
        {inputList.map((input, i) => {
          return (
            <p
              key={`${input} ${i}`}
              onClick={() => {
                setModalStatus(true);
                setModalText(input);
              }}
            >
              {input.length <= 6 ? input : `${input.substring(0, 5)}...`}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;

