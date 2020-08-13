import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("Callback value", this.state.count)
    // );
    // console.log(this.state.count); // setState 함수 니까.. 자바스크립트에 등록하고 다음줄 실행
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    // 독립적으로 실행되기 때문에 이전 값을 가져 가지 않는다.
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increase Count</button>
      </div>
    );
  }
}

export default Counter;
