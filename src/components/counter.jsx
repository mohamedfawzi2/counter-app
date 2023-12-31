import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handelIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handelIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
