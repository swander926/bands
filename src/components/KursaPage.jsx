import React from 'react'
import kursalogo from '../images/kursalogo.jpg'

const KursaPage = () => {
  return (
    <>
      <div className="kursaContainer">
        <div className="kursaCSS">
          <h1>Kurs'd Earth</h1>
          <img src={kursalogo} />
          <a href="https://kursa.bandcamp.com/">
            Join The Kurs'd Earth Family!
          </a>
        </div>
      </div>
    </>
  )
}

export default KursaPage
