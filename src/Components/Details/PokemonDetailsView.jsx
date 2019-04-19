import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { DefaultDetailsView } from './Default/DefaultDetailsView';
import { TypeMatchups } from './Weaknesses/TypeMatchups';
import { StatView } from './Stats/StatView';
import { RightHandDetails } from './RightHandDetails';

export class PokemonDetailsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePokemon: this.props.pokemon,
      singlePokemonData: this.props.singlePokemonData,
      visibleDetailView: this.props.view,
      setPokemonByNameAttr: this.props.setPokemonByNameAttr,
      updateActivePokemon: this.props.updateActivePokemon
    }
  }

  componentDidUpdate(){
    if(this.state.activePokemon !== this.props.pokemon){
      this.setState({
        activePokemon: this.props.pokemon,
        singlePokemonData: this.props.singlePokemonData,
        visibleDetailView: this.props.view
      })
    }
  }

  checkActivePokemonAttr(attr){
    if(attr !== undefined){
      return attr;
    }
    console.log('attr null pokemondetailsview checkActivePokemonAttr()')
    return null
  }


  getKeys(object){
    let objectKeys = Object.keys(object);
    for(let item in objectKeys){
      this.getTypeKey(objectKeys[item])
    }
    return objectKeys
  }


  getActiveViewComponent(view, activePokemon){
    if(activePokemon === undefined){
      return null;
    }
    switch(view){
    case "weaknesses":
      return <TypeMatchups
                typeMatchups={activePokemon.against}
                typeKeys={Object.keys(activePokemon.against)}
             />
    case "stats":
      return <StatView stat={activePokemon.stat}/>
    default:
      return <DefaultDetailsView pokemon={activePokemon}/>
      break;
    }
  }

  getRightHandDetails(attrs){
    let passedAttrs = {
      name: attrs.name,
      pokedex_number: attrs.pokedex_number,
      type_1: this.capitalize(attrs.type_1),
      type_2: this.capitalize(attrs.type_2),
      height: `${attrs.height_m}m`,
      weight: `${attrs.weight_kg}kg`,
      abilities: attrs.abilities,
    }
    return passedAttrs;
  }


  capitalize(word){
    let strArray = word.split("");
    if(strArray[0] !== undefined){
      strArray[0] = strArray[0].toUpperCase();
    }
    if(strArray[0] === undefined){
      console.log(word)
    }
    return strArray.join("");
  }

  render(){
    let activeDetails = this.getActiveViewComponent(this.state.visibleDetailView, this.state.activePokemon);
    let passedProps = this.getRightHandDetails(this.state.activePokemon)
    return(
      <Row className="pokemon-details-container">
        {activeDetails}
        <RightHandDetails
          className="rightHandDetails"
          name={passedProps.name}
          pokedex_number={passedProps.pokedex_number}
          type_1={passedProps.type_1}
          type_2={passedProps.type_2}
          height={passedProps.height}
          weight={passedProps.weight}
          abilities={passedProps.abilities}
        />
        <Button onClick={
          () => {
            this.state.setPokemonByNameAttr(passedProps.name);
            this.state.updateActivePokemon(passedProps.name);
          }}
        />
      </Row>
    )
  }
}
