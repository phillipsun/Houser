import React, { Component } from 'react';
import axios from 'axios';

// Import Components
import House from '../House/House';

// Import Styles
import '../../styles/component/Dashboard/Dashboard.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    }

    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get('/api/houses')
      .then(response => {
        console.log('GET response', response.data);
        this.setState({ houses: response.data })
      })
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`)
      .then(response => this.getHouses());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__header">
          <h2 className="dashboard__heading">Dashboard</h2>
          <button className='dashboard__header-button' onClick={ () => this.props.history.push('/wizard')}>Add New Property</button>
        </div>
        <div className='dashboard__listings-container'>
          <h3 className='dashboard__listings-heading'>Home Listings</h3>
          {this.state.houses.map(el => {
            return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />
          })}
        </div>
      </div>
    )
  }
}