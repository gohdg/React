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
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
        {/* <Inline /> */}
        {/* <Stylesheet primary={false} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
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
