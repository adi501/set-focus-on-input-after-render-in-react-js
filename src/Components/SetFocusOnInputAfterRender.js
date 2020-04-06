import React, { Component } from "react";

class SetFocusOnInputAfterRender extends Component {
  constructor() {
    super();

    this.emailInput = React.createRef();
  }

  componentDidMount() {
    this.emailInput.current.focus();
  }

  render() {
    return (
      <>
        <label>Name</label>

        <input type="text" placeholder="Enter name" ref={this.nameInput} />

        <br />

        <label>Email</label>

        <input type="email" placeholder="Enter email" ref={this.emailInput} />
      </>
    );
  }
}

export default SetFocusOnInputAfterRender;
