import React from 'react'
import data from './data/bands.json'

const HomePage = props => {
  const currentBand = data.bands.filter(band => {
    return band.name === props.match.params.name
  })[0]
  return (
    <div className="artistContainer">
      <ul>
        <li>
          <img
            src={currentBand.description.image}
            alt="Artist Logo Image"
            className="image"
          />
          <br></br>
          <header>{currentBand.description.title}</header>
          <br></br>
          <br></br>
          <img
            src={currentBand.description.albumimage}
            alt="Album Art"
            className="image"
          />
          <p>{currentBand.description.information}</p>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
