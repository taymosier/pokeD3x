import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { TypeWeakness } from './TypeWeakness'

export class TypeMatchups extends Component {
  constructor(props){
    super(props);
    this.state = {
      typeMatchups: this.props.typeMatchups,
      typeKeys: this.props.typeKeys,
      matchupGrid: this.sortByEffectiveness(this.props.typeMatchups, this.props.typeKeys, this.props.setPokemonByNameAttr),
      setPokemonByNameAttr: this.props.setPokemonByNameAttr
    }

  }

  componentDidMount(){
    if(this.state.typeMatchups !== this.props.typeMatchups){
      this.setState({
        typeMatchups: this.props.typeMatchups,
        matchupGrid: this.sortByEffectiveness(this.props.typeMatchups, this.props.typeKeys, this.props.setPokemonByNameAttr),
        setPokemonByNameAttr: this.props.setPokemonByNameAttr
      })
    }
  }

  componentDidUpdate(){
    if(this.state.typeMatchups !== this.props.typeMatchups){
      this.setState({
        typeMatchups: this.props.typeMatchups,
        matchupGrid: this.sortByEffectiveness(this.props.typeMatchups, this.props.typeKeys, this.props.setPokemonByNameAttr),
        setPokemonByNameAttr: this.props.setPokemonByNameAttr
      })
    }
  }


  getTypeKey(type){
    console.log(type)
  }

  sortByEffectiveness(elements, keys, setPokemonByNameAttr){
    let typeBlocks = [];
    let sortedTypes = [];
    let key;
    for(let item in keys){
      key = keys[item];
      typeBlocks.push(
        <TypeWeakness
          key={key}
          type={key}
          matchupValue={elements[key]}
          setPokemonByNameAttr={setPokemonByNameAttr}
        />
      )
    }
    sortedTypes = typeBlocks.sort(function(s,t){
      if(s.props.matchupValue < t.props.matchupValue){
        return -1
      };
      return 1
    })
    return sortedTypes;
  }


  render(){
    return(
      <Col
        xl={{ size: 7, offset: 1 }}
        lg={{ size: 7, offset: 1 }}
        md={{ size: 7, offset: 1 }}
        sm={{ size: 7, offset: 1 }}
        xs={{ size: 7, offset: 1 }}
        className={"weakness-details-view"}
      >
        <Row>
          <Col
            xl={{ size: 2, offset: 1 }}
            lg={{ size: 2, offset: 1 }}
            md={{ size: 2, offset: 1 }}
            sm={{ size: 2, offset: 1 }}
            xs={{ size: 2, offset: 1 }}
            className={"resistance-chart-guide"}
          >
            <p>Effectiveness</p>
            <ul>
              <li style={{"backgroundColor": "darkgreen"}}>0x</li>
              <li style={{"backgroundColor": "#00a000"}}>.25x</li>
              <li style={{"backgroundColor": "#98fb98"}}>.5x</li>
              <li style={{"backgroundColor": "lightgrey"}}>1x</li>
              <li style={{"backgroundColor": "#ff7c7c"}}>2x</li>
              <li style={{"backgroundColor": "red"}}>4x</li>
            </ul>
          </Col>
          <Col
            xl={{ size: 7, offset: 2 }}
            lg={{ size: 7, offset: 2 }}
            md={{ size: 7, offset: 2 }}
            sm={{ size: 7, offset: 2 }}
            xs={{ size: 7, offset: 2 }}
            className={"type-icon-container"}
          >
            {this.state.matchupGrid}
          </Col>
        </Row>
      </Col>
    )
  }
}
