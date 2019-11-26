import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="navContainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TipperPage">Tipper</Link>
          </li>
          <li>
            <Link to="/KllsmthPage">kLL sMTH</Link>
          </li>
          <li>
            <Link to="/KursaPage">Kursa</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
