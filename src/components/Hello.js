import React from "react";

const Hello = () => {
  // jsx
  //   return (
  //     <div className='dummyClass'>
  //       <h1>Hello DG!!</h1>
  //     </div>
  //   );

  // not jsx, using react library
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello DG!!")
  );
};

export default Hello;
