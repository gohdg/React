import React from "react";
// Functional Component
// function Greet() {
//   return <h1>Hello DG!</h1>;
// }

// const Greet = (props) => {
//destructuring prpos and state
const Greet = (props) => {
  const { name, heroname } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroname}
      </h1>
    </div>
  );
};

export default Greet;
