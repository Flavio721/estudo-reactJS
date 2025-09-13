import { useRef } from "react";

function Input() {
  const inputBox = useRef();

  function focarInput() {
    inputBox.current.focus();
  }
  return (
    <div>
      <h2>Focar no campo</h2>
      <input type="text" ref={inputBox} id="icmp" />
      <button onClick={focarInput}>Focar no input</button>
    </div>
  );
}
export default Input;
