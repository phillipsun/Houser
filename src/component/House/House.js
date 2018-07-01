import React from 'react';

// Import Styles
import '../../styles/component/House/House.css'

export default function House(props) {

  let { id, name, address, city, state, zip, img, mortgage, rent } = props.house;

  return (
    <div className="house__container">
      <div className='house__image-container'>
        <img className="house__image" src={img} alt="house image"/>
      </div>
      <div className="house__info">
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>        
      </div>
      <div className='house__rent-info'>
        <p>Monthly Mortgage: {mortgage}</p>
        <p>Desired Rent: {rent}</p>
      </div>
      <div className="house__delete-button">
          <span className="house__delete-button" onClick={ () => props.deleteHouse(id) }>X</span>
        </div>
    </div>
  )
}