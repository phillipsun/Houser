import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateMoney, clear } from './../../ducks/reducer';

// Import Styles
import './../../styles/component/Wizard/Wizard.css';

class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mortgage: 0,
      recommended: 0,
      rent: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount() {
    let { mortgage, rent } = this.props;
    this.setState({ mortgage, rent });
  }

  handleChange(prop, value) {
    switch (prop) {
      case 'mortgage':
        this.setState({
          mortgage: value,
          recommended: value * 1.25
        });
        break;
      case 'rent':
        this.setState({
          rent: value
        })
        break;
      default:
        break;
    }
  }

  complete() {
    let { name, address, city, state, zip, img } = this.props;
    let house = {
      name, address, city, state, zip, img, ...this.state
    };
    axios.post('/api/house', house)
      .then(res => {
        this.props.clear();
        this.props.history.push('/')
      });
  }
  render() {
    return (
      <div>
        <div className="wizard__input-container">
          <div className="wizard__rec-rent-title" style={{ textAlign: 'center', fontWeight: '700', margin: '20px' }}>Recommended Rent: ${this.state.recommended}</div>
          <div className="wizard__input-box">
            <p>Monthly Mortgage Amount</p>
            <input className="wizard__mortgage-input" type='number' style={{ width: "35vw" }} value={this.state.mortgage} onChange={e => this.handleChange('mortgage', e.target.value)} />
          </div>
          <div className="wizard__input-box">
            <p>Desired Monthly Rent</p>
            <input className="wizard__rent-input" type='number' style={{ width: "35vw" }} value={this.state.rent} onChange={e => this.handleChange('rent', e.target.value)} />
          </div>
        </div>
        <button className="wizard__button wizard__prev-button" onClick={ () => {
          this.props.updateMoney(this.state);
          this.props.history.push('/wizard/step2');
        }}>Previous Step</button>
        <button className="wizard__button wizard__complete-button" onClick={this.complete}>Complete</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { updateMoney, clear })(Step3);