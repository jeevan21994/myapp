import React from 'react';

export class Child extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      counter2: 5
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.props.data(this.state.counter2)}>Click me</button><span>{this.state.counter2}</span>
      </div>
    );
  }
}

export default Child;