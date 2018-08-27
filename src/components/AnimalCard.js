import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    let style = {
      width: '200px'
    }
    return (
      <div onClick={() => this.props.handleClick(this.props.animal)} className="animal-card">
        <p>{this.props.animal.name}</p>
        <img alt={this.props.animal.id} style={style} src={this.props.animal.img}/>
        <p>{this.props.animal.type}</p>
        <p>{this.props.animal.sex}</p>
      </div>
    );
  }
}

export default AnimalCard
