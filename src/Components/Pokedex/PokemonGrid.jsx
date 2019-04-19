import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import * as d3 from "d3";
import { PokemonImage } from '../PokemonImage';


export class PokemonGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: this.props.getPokemonList(),
      singlePokemon: this.props.singlePokemon,
      updateActivePokemon: this.props.updateActivePokemon,
      setPokemonByNameAttr: this.props.setPokemonByNameAttr
    }
  }

  getPokemon(){
    let list = [];
    let pokemon =d3.json("/data/pokemon.json".then((data) => {
      list.push(data);
    }))

  }

  componentDidUpdate(){
      if(this.state.singlePokemon !== this.props.singlePokemon){
        this.setState({
          singlePokemon: this.props.singlePokemon
        })
      }
  }

  render(){
    let sprites = [];
    for(let item in this.state.pokemon){
      if(this.state.singlePokemon === this.state.pokemon[item].name){
        sprites.push(
          <Button
            className={`sprite-button`}
            onClick={() => {this.props.setPokemonByNameAttr(this.state.pokemon[item].name)}}
          >
            <PokemonImage
              id={"active"}
              key={this.state.pokemon[item].pokedex_number}
              folderPath={"../images/sprites/"}
              className={"grid-sprite"}
              name={this.state.pokemon[item].name}
              index={this.state.pokemon[item].pokedex_number}
            />
          </Button>

        )
      } else {
        sprites.push(
          <Button
            className={`sprite-button`}
            onClick={
              ()=>{
                this.props.setPokemonByNameAttr(this.state.pokemon[item].name)
              }
            }
          >
            <div className={"sprite-title"}>{this.state.pokemon[item].name}</div>
            <PokemonImage
              folderPath={"../images/sprites/"}
              className={"grid-sprite"}
              key={this.state.pokemon[item].pokedex_number}
              name={this.state.pokemon[item].name}
              index={this.state.pokemon[item].pokedex_number}
              setPokemonByNameAttr={this.setPokemonByNameAttr}
            />
          </Button>

        )
      }
    }
    console.log(this.getPokemon)
    return(
      <Col
        xl={{ size: 12, offset: 0 }}
        lg={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        sm={{ size: 12, offset: 0 }}
        xs={{ size: 12, offset: 0 }}
        className={"sprites-container"}
      >
        {sprites}
      </Col>
    );
  }
}
