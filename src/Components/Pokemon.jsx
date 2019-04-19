import React, { Component } from 'react';

export class Pokemon extends Component {
  constructor(props){
    super(props);
    this.state = Object.assign({}, this.props.pokemon)
  }

  render(){
    return(
      <div>{this.state.name}</div>
    );
  }
}
