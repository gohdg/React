import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>{" "}
      {/* clickHandler() - X 바로 실행된다.*/}
    </div>
  );
}

export default FunctionClick;
