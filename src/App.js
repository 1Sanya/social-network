import './App.css';
import React from "react";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Messenger from "./Components/Messenger/Messenger";
import {BrowserRouter, Route, Redirect} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Redirect to="/profile" />

            <div className='app_wr'>
                <Nav/>
                <div className='app_wr_content'>
                <Route path='/profile' component={Profile}/>
                <Route  path='/messenger' component={Messenger}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
