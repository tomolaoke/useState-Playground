import React, { useState } from "react";

const Home = () => {
  const [myCounter, setMyCounter] = useState(4);
  const [message, setMessage] = useState(""); // New state for messages

  const increaseCount = () => {
    setMyCounter(myCounter + 1);
  };
  const decreaseCount = () => {
    setMyCounter(myCounter - 1);
  };

  const getSquarerootOfFinalCount = (count) => {
    if (count < 0) {
      setMessage("Cannot calculate square root of a negative number");
      return;
    }
    const squareRoot = Math.sqrt(count);
    setMessage(`The square root of ${count} is ${squareRoot}`);
  };

  const showFinalCount = () => {
    setMessage(`The final count is ${myCounter}`);
  };
  const hideFinalCount = () => {
    setMessage("Final count hidden");
  };

  return (
    <div>
      <h1>This is the Home Page</h1>
      <h1>This is the state value</h1>
      <h2>{myCounter}</h2>
      <div className="flex gap-4">
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
          onClick={() => getSquarerootOfFinalCount(myCounter)}
        >
          Get Squareroot of Final Count
        </button>

        <button
          className="bg-yellow-500 text-white p-2 rounded"
          onClick={showFinalCount}
        >
          Show Final Count
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={hideFinalCount}
        >
          Hide Final Count
        </button>
      </div>
      {message && (
        <div className="mt-4 p-2 bg-gray-200 rounded text-black">{message}</div>
      )}
    </div>
  );
};

export default Home;
