import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { items, onSelect } = this.props;
    console.log('RENDER_LIST');
    return (
      <div>
        <ul>
          {items.map((item) => {
            return (
            <li onClick={() => { onSelect(item.id) }} key={item.id}>{item.name}</li>
            )
          })
          }
        </ul>
      </div>
    );
  }
}

export default List;