import './App.css';
import React from "react";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";

function App(props) {

    return (


        <BrowserRouter>
            <div className='app_wr'>
                <Redirect to="/profile" />
                <Nav/>
                <div className='app_wr_content'>
                    <Route path='/profile' render={ ()=> <Profile />}/>
                    <Route path='/messenger' render={ () => <Dialogs />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
