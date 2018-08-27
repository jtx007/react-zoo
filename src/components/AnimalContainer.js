import React, { Component } from 'react';
import AnimalCatalogue from './AnimalCatalogue'
import Zoo from './Zoo'
class AnimalContainer extends Component {

  state = {
    animals: [],
    zoo: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/animals')
    .then(r => r.json())
    .then(json =>
      this.setState({
        animals: json
      })
    )
  }

  addToZoo = (animal) => {
    this.setState((prevState) => ({
      animals: prevState.animals.filter(a => {
        return a !== animal
      }),
      zoo: [...prevState.zoo, animal]
    }))
  }

  removeFromZoo = (animal) => {
    this.setState((prevState) => ({
      animals: [animal, ...prevState.animals],
      zoo: prevState.zoo.filter(a => {
        return a !== animal
      })
    }))
  }

  render() {
    console.log(this.addToZoo)
    return (
      <div>
        <Zoo handleClick={this.removeFromZoo} zoo={this.state.zoo}/>
        <AnimalCatalogue handleClick={this.addToZoo}  animals={this.state.animals}/>
      </div>
    );
  }
}

export default AnimalContainer;
