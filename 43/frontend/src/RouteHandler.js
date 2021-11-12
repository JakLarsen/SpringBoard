import React from "react";
import {Route, Routes} from 'react-router-dom'
import './css/RouteHandler.css'
// import TestApiCall from "./TestApiCall";
import Home from "./routes/Home";
import Welcome from "./routes/Welcome";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Companies from "./routes/Companies";
import Jobs from './routes/Jobs'
import Profile from "./routes/Profile";
import Company from './routes/Company'



const RouteHandler = () => {

    return(
        <div className="RouteHandler">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/welcome" element={<Welcome/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/companies" element={<Companies/>}/>
                <Route exact path="/companies/:handle" element={<Company/>}/>
                <Route exact path="/jobs" element={<Jobs/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    )
}

export default RouteHandler