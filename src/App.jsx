import { useState } from "react";
import Controls from "./Controls";
import Display from "./Display";

function App() {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);
  const receiveInput = (input) => {
    setInput(input);
  };
  const receiveResult = (result) => {
    setResult(result);
  };

  return (
    <div id="calculatorWrapper">
      <Display input={input} result={result} />
      <Controls sendToParent={receiveInput} sendResult={receiveResult} />
      <div id="developer">
        <p>Designed and Coded By</p>
        <p id="myName">Baraka Karuru</p>
      </div>
    </div>
  );
}

export default App;
