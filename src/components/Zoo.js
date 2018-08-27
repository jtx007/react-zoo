import React, { Component } from 'react';
import AnimalCard from './AnimalCard'
class Zoo extends Component {

  genAnimalCard = (animals) => {
    return animals.map(animal => {
      return (
        <AnimalCard handleClick={this.props.handleClick}  key={animal.name} animal={animal} />
      )
    })
  }


  render() {
    return (
      <div>
        <h2>Zoo</h2>
        <div className="container row">
          {this.genAnimalCard(this.props.zoo)}
        </div>
      </div>
    );
  }
}

export default Zoo;
