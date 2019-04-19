import React, { Component } from 'react';

import { ScatterPlot } from './ScatterPlot';

export class Graph extends Component {
  constructor(props){
    super(props);
    this.state = {
      graphicType: this.props.graphicType,
      pokemon: this.props.getPokemonList(),
      dataAttrs: this.getAttrNames(this.props.graphicType)
    }
  }

  getAttrNames(graphicType){
    switch(graphicType){
      case "circle":
        return(["cx", "cy", "r", "stroke", "stroke-width", "fill"])
      case "rect":
        return(["width", "height", "style"])
      case "line":
        return(["x1", "y1", "x2", "y2", "style"])
      case "polygon":
        return(["points", "style"])
      case "polyline":
        return(["points", "style"])
      default:
        return null
    }
  }

  render(){
    return(
      <ScatterPlot
        data={this.props.pokemon}
        dataAttrs={this.props.dataAttrs}
        graphicType={this.props.graphicType}
      />

    )
  }
}
