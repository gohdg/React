import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}

        {/* <Counter /> */}
        {/* <Message></Message> */}
        {/* <Greet name="Bruce" heroname="Batman">
          <p>This is childern props </p>
        </Greet>
        <Greet name="Clar" heroname="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroname="Wonder woman" /> */}
        {/* <Welcome name="Bruce" heroname="Batman" /> */}
        {/* <Welcome name="Clark" heroname="Superman" /> */}
        {/* <Welcome name="Diana" heroname="Wonder woman" /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
