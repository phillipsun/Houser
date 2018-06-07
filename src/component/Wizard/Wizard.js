import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { clear } from './../../ducks/reducer';

// Import Components
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Wizard(props) {
  return (
    <div className='wizard'>
      <div className='wizard__subheader'>
        <h2 className='wizard__heading'>Add New Listing</h2>
        <button className='wizard__subheader-button' onClick={() => {
          props.clear();
          props.history.push('/')
        }}>Cancel</button>
      </div>
      <Route path='/wizard/step1' component={Step1} />
      <Route path='/wizard/step2' component={Step2} />
      <Route path='/wizard/step3' component={Step3} />
    </div>
  )
}

export default connect(null, { clear })(Wizard);