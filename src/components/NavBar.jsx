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
            <Link to="/tipper">Tipper</Link>
          </li>
          <li>
            <Link to="/kll-smth">kLL sMTH</Link>
          </li>
          <li>
            <Link to="/kursa">Kursa</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
