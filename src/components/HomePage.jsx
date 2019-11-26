import React from 'react'
import data from './data/bands.json'

const HomePage = props => {
  const names = data.bands.filter(band => {
    return band.name === props.match.params.name
  })[0]
  return (
    <div>
      <ul>
        {names.description.map(info => {
          return (
            <li>
              <header>{info.title}</header>
              <img src={info.image} alt="" />
              <p>{info.information}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage
