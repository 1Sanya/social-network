import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import FriendsContainer from './Components/Friends/FriendsContainer';
import PhotosContainer from './Components/Photos/PhotosContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

export const App = () => (

  <BrowserRouter>
    <div className="app_wr">
      <Nav />
      <Switch>
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messenger" render={() => <DialogsContainer />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/photos" render={() => <PhotosContainer />} />
        <Route path="/" render={() => <Profile />} />
      </Switch>

    </div>
  </BrowserRouter>

);
