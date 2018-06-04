import React, { Component } from 'react';
import axios from 'axios';

// Import Styles
import '../../styles/component/Wizard/Wizard.css'

export default class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.history.push('/');
  }

  handleChange(prop, value) {
    this.setState({ [prop]: value });
  }

  handleSubmit() {
    axios.post('/api/house', this.state)
      .then( res => {
        console.log(this.state);
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div className="wizard">
        <div className="wizard__header">
          <h2 className="wizard__heading">Add new listing</h2>
          <button className="wizard__cancel-button" onClick={ () => this.handleCancel() }>Cancel</button>
        </div>
        <div className="wizard__listing-info">
          <div class="wizard__input">
            <p>Property Name</p>
            <input className="wizard__name-input"  value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)} />
          </div>
          <div class="wizard__input">
            <p>Address</p>
            <input className="wizard__address-input" value={this.state.address} onChange={ e => this.handleChange('address', e.target.value)} />
          </div>
          <div class="wizard__input">
            <p>City</p>
            <input className="wizard__city-input"  value={this.state.city} onChange={ e => this.handleChange('city', e.target.value)} />
          </div>
          <div class="wizard__input">
            <p>State</p>
            <input className="wizard__state-input"  value={this.state.state} onChange={ e => this.handleChange('state', e.target.value)} />
          </div>
          <div class="wizard__input">
            <p>Zip</p>
            <input className="wizard__zip-input"  type="number" value={this.state.zip} onChange={ e => this.handleChange('zip', e.target.value)} />
          </div>
        </div>
        <button className="wizard__complete-button" onClick={ () => this.handleSubmit() }>Complete</button>
      </div>
    )
  }
}