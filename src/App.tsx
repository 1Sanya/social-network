import './App.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Profile from './Components/Profile/Profile'
import Friends from './Components/Friends/Friends'
import Dialogs from './Components/Dialogs/Dialogs'
import Photos from './Components/Photos/Photos'
import { DialogsTrompley } from './Components/DialogsTrompley/DialogsTrompley'

export const App = () => (
  <BrowserRouter>
    <div className="app_wr">
      <Nav />
      <Switch>
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messenger" render={() => <Dialogs />} />
        <Route path="/messengerTrompley" render={() => <DialogsTrompley />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/photos" render={() => <Photos />} />
        <Route path="/" render={() => <Profile />} />
      </Switch>
    </div>
  </BrowserRouter>
)
