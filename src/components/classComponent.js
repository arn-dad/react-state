import React, { Component } from 'react';
import List from './list';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      listItems: [ 
        { id:0, name: 'Max' },
        { id:1, name: 'Bob' }
       ]
    }
  }

  handleInputChange = (event) => {
    const { target: { value } } = event;
    this.setState({ value });
  }

  selectItems = (itemId) => {
    console.log("itemId: ", itemId);
  }

  render() {
    const { value, listItems } = this.state;
    return (
      <div>
        <input value={value} type="text" onChange={this.handleInputChange}/>
        <List onSelect={this.selectItems} items={listItems}/>
      </div>
     
    )
  }
}

export default ClassComponent;