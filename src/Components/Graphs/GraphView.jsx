import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

import { PokemonGrid } from '../Pokedex/PokemonGrid';
import { Graph } from '../Graphs/Graph';

export class GraphView extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: this.props.pokemon,
      graphType: this.props.graphType,
      singlePokemon: this.props.singlePokemon,
      setPokemonByNameAttr: this.props.setPokemonByNameAttr,
      getPokemonList: this.props.getPokemonList,
      dataAttrs: ""
    }
  }

  render(){
    return(
      <Col
        xl={{ size: 11, offset: 0 }}
        lg={{ size: 11, offset: 0 }}
        md={{ size: 11, offset: 0 }}
        sm={{ size: 11, offset: 0 }}
        xs={{ size: 11, offset: 0 }}
        id={"graphArea"}
      >

        <PokemonGrid
          getPokemonList={this.state.getPokemonList}
          singlePokemon={this.state.singlePokemon}
          setPokemonByNameAttr={this.state.setPokemonByNameAttr}
        />
      </Col>
    )
  }
}
