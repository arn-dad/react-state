import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  hendleCountClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.hendleCountClick}>{`clicked  ${count}`}</button>
      </div>
    );
  }
}

export default Counter;