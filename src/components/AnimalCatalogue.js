import React, { Component } from 'react';
import AnimalCard from './AnimalCard'
class AnimalCatalogue extends Component {

  genAnimalCard = (animals) => {
    return animals.map(animal => {
      return (
        <AnimalCard handleClick={this.props.handleClick} key={animal.name} animal={animal} />
      )
    })
  }

  render() {
    console.log("c", this.props)
    return (
      <div>

        <h2>Animal Catalogue</h2>
        <div className="container row">
          {this.genAnimalCard(this.props.animals)}
          </div>
      </div>
    );
  }
}

export default AnimalCatalogue;
