import './App.css';
import React from "react";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import FriendsContainer from "./Components/Friends/FriendsContainer";

function App(props) {

    return (


        <BrowserRouter>
            <div className='app_wr'>
                <Nav/>
                <div className='app_wr_content'>
                    <Route path='/profile' render={ ()=> <Profile />}/>
                    <Route path='/messenger' render={ () => <Dialogs />}/>
                    <Route path='/friends' render={ () => <FriendsContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
