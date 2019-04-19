import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { Main } from './Components/Main';
import { Pokemon } from './Components/Pokemon';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      singlePokemon: "Charizard",
      pokemon: this.props.pokemon
    }
    this.setPokemonByNameAttr = this.setPokemonByNameAttr.bind(this);
    this.getPokemonList = this.getPokemonList.bind(this);
  }

  getPokemonList(){
    return this.state.pokemon
  }

  componentDidMount(){
    this.setState({
      singlePokemon: "Charizard",
    })
  }


  udpateActivePokemon(name){
    if(this.state.activePokemon !== name){
      this.setState({
        singlePokemon: name
      })
    }
  }

  setPokemonByNameAttr(name){
    this.setState({
      singlePokemon: name
    })
  }

  render() {
    let pokemonList = [];
    for(let item in this.state.pokemon){
      pokemonList.push(this.state.pokemon[item])
    }
    return (
      <Container
        className="app"
      >
        <Main
          pokemon={pokemonList}
          singlePokemon={this.state.singlePokemon}
          setPokemonByNameAttr={this.setPokemonByNameAttr}
          getPokemonList={this.getPokemonList}
        />
      </Container>
    );
  }
}

export default App;
