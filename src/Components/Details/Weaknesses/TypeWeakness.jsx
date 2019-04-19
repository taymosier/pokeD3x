import React, { Component } from 'react';

export class TypeWeakness extends Component {
  constructor(props){
    super(props);
    this.state = {};
    // this.moveIcon = this.moveIcon.bind(this);
  }

  componentDidMount(){
    this.setState({
      type: this.props.type,
      matchupValue: this.props.matchupValue,
      style: this.setStyle(this.props.matchupValue),
    })
  }

  componentDidUpdate(){
    if(this.state.matchupValue !== this.props.matchupValue){
      this.setState({
        type: this.props.type,
        matchupValue: this.props.matchupValue,
        style: this.setStyle(this.props.matchupValue),
      })
    }
  }

  setStyle(type){
    let style;
    let backgroundColor = this.matchupColor(type);
    style = {
      "backgroundColor": `${backgroundColor}`
    }
    return style;
  }


  matchupColor(value){
    switch(value){
      case "0":
        return "darkgreen";
      case "0.25":
        return "#00a000";
      case "0.5":
        return "#98fb98";
      case "1":
        return "lightgrey";
      case "2":
        return "#ff7c7c";
      case "4":
        return "red";
      default:
        return null
    }
  }

  render(){
    return(
      <div className={"type-icon"} style={this.state.style}>
        <img title={this.props.type} src={require("../../../images/type_icons/" + this.props.type + ".png")} />
      </div>
    )
  }
}
