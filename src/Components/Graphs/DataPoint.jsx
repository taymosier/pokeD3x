import React, { Component } from 'react';

export class DataPoint extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      index: ""
    };
  }

  render(){
    return(
      <p>Data Point</p>
    );
  }
}
