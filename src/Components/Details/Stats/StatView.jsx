import React, { Component } from 'react';

export class StatView extends Component {
  constructor(props){
    super(props);
    this.state = {
      stat: {
        "hp": this.props.stat.hp,
        "attack": this.props.stat.attack,
        "defense": this.props.stat.defense,
        "special_attack": this.props.stat.special_attack,
        "special_defense": this.props.stat.special_defense,
        "speed": this.props.stat.speed
      }
    }
  }

  componentDidMount(){
    this.setState({
      stat: {
        "hp": this.props.stat.hp,
        "attack": this.props.stat.attack,
        "defense": this.props.stat.defense,
        "special_attack": this.props.stat.special_attack,
        "special_defense": this.props.stat.special_defense,
        "speed": this.props.stat.speed
      }
    })
  }
  render(){
    return(
      <div className="stat-detail-view">
        <p>HP: {this.state.stat.hp}</p>
        <p>Attack: {this.state.stat.attack}</p>
        <p>Defense: {this.state.stat.defense}</p>
        <p>Special Attack: {this.state.stat.special_attack}m</p>
        <p>Special Defense: {this.state.stat.special_defense}kg</p>
        <p>Speed: {this.state.stat.speed}</p>
      </div>
    );
  }
}
