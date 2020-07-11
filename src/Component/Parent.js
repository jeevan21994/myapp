import React from 'react';
import {Child} from './Child';

export default class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      counter: 0,
      name:"jeevan singh"
    }
  }

  update(value){
    return () => {
       this.setState({
         counter: value,
         name:"manoj chouhan"
       });
    }
  }

  render(){
    return(
      <div>
        {this.props.name}<br/>
        {this.props.data.name}
        {this.props.data.age}<br/>
       <ul>
         { this.props.students.map(student => (
                        <li key={student.name}>
                          {student.name}
                          {student.age}
                        </li>
                      ))}
           </ul> 
        
        {/* child to parent */}
        <span>{this.state.counter} {this.state.name}</span>
        <Child data={this.update.bind(this)}/>
      </div>
    );
  }
}