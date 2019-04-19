import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { PokemonDetailsView } from './Details/PokemonDetailsView';
import { GraphView } from './Graphs/GraphView';


export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      singlePokemon: this.props.singlePokemon,
      singlePokemonData: this.getActivePokemonData(this.props.pokemon, "name", this.props.singlePokemon),
      pokemon: this.props.pokemon,
      detailsView: "weaknesses",
      activeGraph: "default",
      setPokemonByNameAttr: this.props.setPokemonByNameAttr,
      getPokemonList: this.props.getPokemonList
    }
    this.updateActivePokemon = this.updateActivePokemon.bind(this);
  }

  componentDidUpdate(){
    if(this.state.singlePokemon !== this.props.singlePokemon){
      this.setState({
        singlePokemon: this.props.singlePokemon,
        singlePokemonData: this.getActivePokemonData(this.props.pokemon, "name", this.props.singlePokemon),
        detailsView: "weaknesses",
        activeGraph: "default"
      });
    }
  }

  getActivePokemonData(pokemonList, identifyingAttr, attrValue){
    let result;
    try {
      result = pokemonList.filter(obj => {
        return obj[`${identifyingAttr}`] === `${attrValue}`
      })
      return result[0];
    } catch(e){
      console.log(e)
    }
    return null
  }

  updateActivePokemon(name){
    console.log('updateActivePokemon')
    this.setState({
      singlePokemon: name
    })
  }

  render(){
    let activePokemon = this.getActivePokemonData(this.state.pokemon, "name", this.state.singlePokemon);
    return(
        <Col className="main"
          xl={{ size: 12, offset: 0 }}
          lg={{ size: 12, offset: 0 }}
          md={{ size: 12, offset: 0 }}
          sm={{ size: 12, offset: 0 }}
          xs={{ size: 12, offset: 0 }}
        >
          {this.state.singlePokemon !== undefined
            ? <PokemonDetailsView
                pokemon={activePokemon}
                singelePokemonData={this.state.singlePokemonData}
                view={this.state.detailsView}
                setPokemonByNameAttr={this.state.setPokemonByNameAttr}
                updateActivePokemon={this.state.setPokemonByNameAttr}
              />
            : null
          }

          <GraphView className="graph-container"
            singlePokemon={this.state.singlePokemon}
            activeGraph={this.state.activeGraph}
            pokemon={this.state.pokemon}
            activePokemon={this.state.activePokemon}
            setPokemonByNameAttr={this.state.setPokemonByNameAttr}
            getPokemonList={this.state.getPokemonList}
          />
        </Col>
    )
  }
}
