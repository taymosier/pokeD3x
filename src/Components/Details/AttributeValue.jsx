import React, { Component } from 'react'

export class AttributeValue extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  render(){
    return(
      <p className="attributeValue">{this.state.value}</p>
    );
  }
}
