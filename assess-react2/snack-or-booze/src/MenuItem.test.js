import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem'
import { BrowserRouter, Route } from "react-router-dom";
import ourTestData from './testData'



test("renders without crashing", ()=>{
    
    render(
        <BrowserRouter>
            <Route path="/snacks/:id">
                <MenuItem items={ourTestData.snacks} cantFind="/snacks" />
            </Route>
        </BrowserRouter>
    )
})