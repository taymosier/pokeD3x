import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class PokemonImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: this.props.index,
      folderPath: "../images/sprites/",
      name: this.props.name,
      className: this.props.className,
      updateActivePokemon: this.props.updateActivePokemon
    }
  }

  componentDidMount(){
    let id, className, folderPath;
    {this.props.id !== undefined ? id = this.props.id : id = null}
    {this.props.class !== undefined ? className = this.props.class : className = null}
    {this.props.folderPath !== undefined ? folderPath = this.props.folderPath : folderPath = this.state.folderPath}
    if(this.state.index !== this.props.index){
      this.setState({
        index: this.props.index,
        id: id,
        folderPath: folderPath,
        class: className
      })
    }
  }

  componentDidUpdate(){
    if(this.state.index !== this.props.index){
      this.setState({
        index: this.props.index,
        name: this.props.name
      })
    }
  }

  render(){
    let src, className;
    try {
      src = require("../images/sprites/" + this.state.index + ".png")
    } catch(e){
      src = null
    }
    {this.state.className !== undefined ? className = this.state.className : className="sprite"}
    return(
        <img
           src={src}
           title={this.state.name}
           className={`${className} sprite`}
        />
    )
  }
}
