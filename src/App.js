import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    let inputValue = inputRef.current.value;
    // prevent NaN result
    if (typeof inputValue === 'number') {
      setResult((result) => result / Number(inputRef.current.value));
    }
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <div className="mb-2">
          <p ref={resultRef}>
            = <b>{result}</b>
          </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
        </div>
        <div className="mb-2 flex gap-2">
          <button className="btn btn-default" onClick={plus}>Add</button>
          <button className="btn btn-default" onClick={minus}>Subtract</button>
          <button className="btn btn-default" onClick={times}>Multiply</button>
          <button className="btn btn-default" onClick={divide}>Divide</button>
        </div>
        <div className="mb-2 flex gap-2">
          <button className="btn btn-reset" onClick={resetInput}>Reset Input</button>
          <button className="btn btn-reset" onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App; 
