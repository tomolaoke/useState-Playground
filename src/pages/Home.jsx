import React, { useState } from "react";

const Home = () => {
  const [myCounter, setMyCounter] = useState(4);
  const [message, setMessage] = useState("");
  const [displayState, setDisplayState] = useState("Square"); // "Square" | "finalCount" | "hidden"

  const increaseCount = () => {
    setMyCounter(myCounter + 1);
  };
  const decreaseCount = () => {
    setMyCounter(myCounter - 1);
  };

  const handleButtonClick = () => {
    if (displayState === "Square") {
      const square = myCounter * myCounter;
      setMessage(`The square of ${myCounter} is ${square}`);
      setDisplayState("finalCount");
    } else if (displayState === "finalCount") {
      setMessage(`The final count is ${myCounter}`);
      setDisplayState("hidden");
    } else if (displayState === "hidden") {
      setMessage("");
      setDisplayState("Square");
    }
  };

  const getButtonLabel = () => {
    if (displayState === "Square") return "Get Square Of";
    if (displayState === "finalCount") return "Show Final Count";
    if (displayState === "hidden") return "Hide Final Count";
  };

  return (
    <div>
      <h1>This Home Page</h1>
      <h1>This is the state value: {myCounter}</h1>
      {/* <h2>{myCounter}</h2> */}
      <div className="flex gap-4 mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={increaseCount}
        >
          Increase Count
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={decreaseCount}
        >
          Decrease Count
        </button>

        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleButtonClick}
        >
          {getButtonLabel()}
        </button>
      </div>
      {message && (
        <div className="mt-0 p-2 bg-yellow-300 rounded text-black w-104 h-60 text-left flex items-center justify-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default Home;
