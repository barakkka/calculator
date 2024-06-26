import React, { useEffect, useState } from "react";

function Controls({ sendToParent, sendResult }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [pressed, setPressed] = useState(""); //continue setting clicked upon each
  const [operatorCount, setOperatorCount] = useState(0);

  useEffect(() => {
    sendToParent(input);
  }, [input]);
  useEffect(() => {
    sendResult(result);
  }, [result]);

  const handleButtonClick = (e) => {
    if (input.length <= 18) {
      //Clicked on decimal point
      if (e.target.classList.contains("point")) {
        if (pressed !== "point") {
          if (input === "") {
            setInput("0.");
          } else {
            setInput((prev) => `${prev}.`);
          }
          setPressed("point");
        }
      }
      // Clicked on a number
      if (e.target.classList.contains("number")) {
        if (input !== "") {
          setInput((prev) => `${prev}${e.target.innerText}`);
          setOperatorCount(0);
        } else {
          setInput(e.target.innerText);
        }
      }
      //Clicked on arithmetic
      if (e.target.classList.contains("operators")) {
        if (input !== "" && operatorCount < 2) {
          setInput((prev) => `${prev}${e.target.innerText}`);
          setOperatorCount((prev) => prev + 1);
          setPressed("sign");
        }
      }
      //Clicked on Equals
      if (e.target.classList.contains("equals")) {
        setPressed("equals");
        let result;
        try {
          result = eval(input);
        } catch (error) {
          alert("invalid expression");
        }
        setResult(result);
      }
      //Clicked on AC
      if (e.target.getAttribute("id") === "clear") {
        setInput("");
        setResult("");
        setPressed("");
        setOperatorCount(0);
      }
    } else {
      //Clicked on AC
      if (e.target.getAttribute("id") === "clear") {
        setInput("");
        setResult("");
        setPressed("");
        setOperatorCount(0);
      } else {
        alert("Arithmetic is too long");
      }
    }
  };

  return (
    <div id="controlsContainer">
      <div id="controls">
        <button
          className="button"
          id="clear"
          onClick={(e) => handleButtonClick(e)}
        >
          AC
        </button>
        <button className="button number blank invisible"></button>
        <button
          className="button operators"
          onClick={(e) => handleButtonClick(e)}
        >
          /
        </button>
        {/* -- */}
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          7
        </button>
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          8
        </button>
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          9
        </button>
        <button
          className="button operators"
          onClick={(e) => handleButtonClick(e)}
        >
          *
        </button>
        {/* -- */}
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          4
        </button>
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          5
        </button>
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          6
        </button>
        <button
          className="button operators"
          onClick={(e) => handleButtonClick(e)}
        >
          -
        </button>
        {/* -- */}
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          1
        </button>
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          2
        </button>
        <button className="button number" onClick={(e) => handleButtonClick(e)}>
          3
        </button>
        <button
          className="button operators"
          onClick={(e) => handleButtonClick(e)}
        >
          +
        </button>
        {/* -- */}
        <button
          className="button number blank"
          onClick={(e) => handleButtonClick(e)}
        >
          0
        </button>
        <button className="button point" onClick={(e) => handleButtonClick(e)}>
          .
        </button>
        <button
          className="button equals "
          onClick={(e) => handleButtonClick(e)}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Controls;
