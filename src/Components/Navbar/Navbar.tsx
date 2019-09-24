import React, { Component } from 'react';
interface State {
  amount: number;
}

export class Navbar extends Component<{}, State> {
  state: State = {
    amount: 0,
  };
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={() =>
            this.setState({ amount: this.state.amount + 1 }, () =>
              console.log(this.state.amount),
            )
          }
        >
          Click me
        </button>
        <h1>Lorem ipsum dolor sit. {this.state.amount.toString()}</h1>
      </div>
    );
  }
}
