import React from "react";

export class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: "i am in child",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.child}</h1>
      </div>
    );
  }
}

export default Child2;
