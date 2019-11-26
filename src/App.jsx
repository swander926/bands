import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import ArtistPages from './components/ArtistPages'
import NavBar from './components/NavBar'
import TipperPage from './components/TipperPage'
import KursaPage from './components/KursaPage'
import KllsmthPage from './components/KllsmthPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/TipperPage" component={TipperPage}></Route>
          <Route exact path="/KllsmthPage" component={KllsmthPage}></Route>
          <Route exact path="/KursaPage" component={KursaPage}></Route>

          {/* <Route exact path="/:category" component={ArtistPages}></Route> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
