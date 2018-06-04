import React from 'react';

// Import Styles
import '../../styles/component/House/House.css'

export default function House(props) {

  let { id, name, address, city, state, zip } = props.house;

  return (
    <div className="house__container">
      <div className="house">
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
        <div className="house__delete-button">
          <span className="house__delete-button" onClick={ () => props.deleteHouse(id) }>X</span>
        </div>
      </div>
    </div>
  )
}