import React, { Component } from 'react';
import { AttributeLabel } from './AttributeLabel';
import { AttributeValue } from './AttributeValue';

export class Attribute extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: Object.keys(this.props),
      value: this.props[Object.keys(testObj)]
    }
  }

  render(){
    return(
      <div className="attributeContainer">
        <AttributeLabel label={this.state.label}/> : <AttributeValue value={this.state.value}/>
      </div>
    )
  }
}
