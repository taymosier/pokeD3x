import React, { Component }

export class AttributeLabel extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: this.props.label
    }
  }

  render(){
    return(
      <p className="attributeLabel">{this.state.label}</p>
    );
  }
}
