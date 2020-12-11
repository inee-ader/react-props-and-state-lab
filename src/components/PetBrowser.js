import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  
  render() {
    let petCards =
      this.props.pets.map(pet => (
        <Pet isAdopted={this.props.onAdoptPet} key={pet.id} pet={pet} />
      ))
      return <div className="ui cards">{petCards}</div>
    }
  
}

export default PetBrowser
