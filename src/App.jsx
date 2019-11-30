import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import ArtistPages from './components/ArtistPages'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/:name" component={HomePage}></Route>

          {/* <Route exact path="/:category" component={ArtistPages}></Route> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
