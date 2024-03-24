import React, { useEffect, useState } from "react";

function Display({ input, result }) {
  const [display, setDisplay] = useState(null);
  const [answer, setAnswer] = useState(null);
  //setDisplay to the input anytime input changes
  useEffect(() => {
    setDisplay(input);
  }, [input]);
  //setAnswer to result when result changes or when we receive the result value
  useEffect(() => {
    setAnswer(result);
  }, [result]);

  return (
    <div id="displayContainer">
      <div id="display">
        <div id="operation">{display}</div>
        <div id="result">{answer}</div>
      </div>
    </div>
  );
}

export default Display;
