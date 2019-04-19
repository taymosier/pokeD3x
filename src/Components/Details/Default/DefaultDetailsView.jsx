import React, { Component } from 'react';

export class DefaultDetailsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: {
        "name": null,
        "type1": null,
        "type2": null,
        "height": null,
        "weight": null,
        "abilities": null,
        "pokedexNumber": null,
        "isLegendary": null
      }
    }
  }

  componentDidMount(){
    this.setState({
      pokemon: {
        "name": this.props.pokemon.name,
        "type1": this.props.pokemon.type_1,
        "type2": this.props.pokemon.type_2,
        "height": this.props.pokemon.height_m,
        "weight": this.props.pokemon.weight_kg,
        "abilities": this.props.pokemon.abilities,
        "pokedexNumber": this.props.pokemon.pokedex_number,
        "isLegendary": this.props.pokemon.is_legendary
      }
    })
  }

  render(){
    return(
      <div className="default-detail-view">
        <p>{this.state.pokemon.pokedexNumber}</p>
        <p>{this.state.pokemon.name}</p>
        <p>{this.state.pokemon.type1}/{this.state.pokemon.type2}</p>
        <p>Height: {this.state.pokemon.height}m</p>
        <p>Weight: {this.state.pokemon.weight}kg</p>
        <p>{this.state.pokemon.abilities}</p>
      </div>
    )
  }
}
