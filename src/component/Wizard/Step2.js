import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateImg } from './../../ducks/reducer';

// Import Styles
import './../../styles/component/Wizard/Wizard.css';

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ img: this.props.img })
  }

  handleChange(value) {
    this.setState({ img: value })
  }

  render() {
    return (
      <div>
        <div className="wizard__input-container">
          <div className="wizard__input-box">
            <p>Image URL</p>
            <input className="wizard__url-input" style={{ width: "35vw" }} value={this.state.img} onChange={e => this.handleChange(e.target.value)} />
          </div>
        </div>
        <button 
          className="wizard__button wizard__prev-button" 
          onClick = { () => {
            this.props.updateImg(this.state.img);
            this.props.history.push('/wizard/step1');
            }}
          >
          Previous Step
        </button>
        <button 
          className="wizard__button wiz_step_button" 
          onClick={ () => {
            this.props.updateImg(this.state.img);
            this.props.history.push('/wizard/step3');
          }}
          >
          Next Step
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    img: state.img
  };
}

export default connect(mapStateToProps, { updateImg })(Step2);