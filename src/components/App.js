import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  adoptPet = (petId) => {
    // fetch by petId, find matching pet in state.pets
    let pet=this.state.pets.find(petId)
    this.setState({
      ...pet, isAdopted: true
    })
  }

  onFindPetsClick = () => {
    let route = '/api/pets'
    if(this.state.filters.type !== 'all'){
      route += `?type=${this.state.filters.type}`
    }
    fetch(route)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
