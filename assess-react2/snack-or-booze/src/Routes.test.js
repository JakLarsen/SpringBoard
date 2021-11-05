import React from 'react';
import { render} from '@testing-library/react';
import Routes from './Routes'
import { BrowserRouter} from "react-router-dom";

test("renders without crashing", ()=>{
    
    render(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
       
    )
})