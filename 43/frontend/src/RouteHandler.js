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
import Logout from "./routes/Logout";
import PrivateRoute from './PrivateRoute'



const RouteHandler = ({login, signup}) => {

    return(
        <div className="RouteHandler">
            <Routes>
                
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/welcome" element={<Welcome/>}/>
                <Route exact path="/login" element={<Login login={login}/>}/>
                <Route exact path="/logout" element={<Logout/>}/>
                <Route exact path="/signup" element={<Signup signup={signup}/>}/>
                
                <Route 
                    exact path="/companies" 
                    element={
                        <PrivateRoute>
                            <Companies/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/companies/:handle" 
                    element={
                        <PrivateRoute>
                            <Company/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/jobs" 
                    element={
                        <PrivateRoute>
                            <Jobs/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    exact path="/profile" 
                    element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    )
}

export default RouteHandler