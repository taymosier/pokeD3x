import React, { Component } from 'react';
import { PokemonImage } from '../PokemonImage'
import { Col, Row } from 'reactstrap';


export class RightHandDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      pokedex_number: this.props.pokedex_number,
      type_1: this.props.type_1,
      type_2: this.props.type_2,
      height: this.props.height,
      weight: this.props.weight,
      abilities: this.props.abilities
    }
  }

  componentDidUpdate(){
    if(this.state.pokedex_number !== this.props.pokedex_number){
      this.setState({
        name: this.props.name,
        pokedex_number: this.props.pokedex_number,
        type_1: this.props.type_1,
        type_2: this.props.type_2,
        height: this.props.height,
        weight: this.props.weight,
        abilities: this.props.abilities
      })
    }
  }

  render(){
    return(
      <Col
        xl={{ size: 3, offset: 0 }}
        lg={{ size: 3, offset: 0 }}
        md={{ size: 3, offset: 0 }}
        sm={{ size: 3, offset: 0 }}
        xs={{ size: 3, offset: 0 }}
        className="basic-details-container"
      >
        <Row className="sprite-container">
          <PokemonImage className="sprite" index={this.state.pokedex_number} />
        </Row>
        <Row className={"basic-details"}>
          <div>
            <p>{this.state.name}</p>
            <p>{this.state.type_1} / {this.state.type_2}</p>
            <p>{this.state.height}</p>
            <p>{this.state.weight}</p>
            <p>{this.state.abilities[0]} / {this.state.abilities[1]}</p>
          </div>
        </Row>
      </Col>
    )
  }
}
