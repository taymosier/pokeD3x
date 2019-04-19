import React, { Component } from 'react';
import * as d3 from "d3";

export class ScatterPlot extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      // dataAttrs: this.props.dataAttrs,
      // generalAttrs: this.props.generalAttrs,
      graphicType: this.props.graphicType
    }
  }

  // generateXAxis(){
  //   let x = d3.scaleBand()
  //     .range([0, width])
  //     .padding(0.2);
  //
  //   let xAxisGroup = g.append("g")
  //     .attr("class","x axis")
  //     .attr("transform", "translate(0," + height + ")");
  //
  //     x.domain([300, 150000]);
  //
  //     let xAxisCall = d3.axisBottom(x);
  //     xAxisGroup.transition(t).call(xAxisCall);
  //
  // }

  render(){

    let graph = d3.select('#graphArea').append("svg")
      .attr("min-height", "100%")
      .attr("max-height", "100%")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("min-width", "100%")
      .attr("max-width", "100%");
    //
    // let x = this.generateXAxis();
    //
    // let points = graph.selectAll(`${this.props.graphicType}`)
    //   .data(this.props.data)
    //   .enter()
    //   .append(`${this.props.graphicType}`)
    //   .(this.props.dataAttrs, d) =>{
    //     for(let item in this.props.dataAttrs){
    //       if(this.props.generalAttrs.contains(`${item}`)){
    //         .append(`${item}`, this.props.generalAttrs[`${item}`])
    //       } else {
    //         .append(`${item}`, d[`${item}`])
    //       }
    //     }
    //   }
    return(graph);
  }
}
