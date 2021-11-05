import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home'



test("renders without crashing", ()=>{
  render(
    <BrowserRouter>
      <Route exact path="/">
          <Home/>
      </Route>
    </BrowserRouter>
  )
})