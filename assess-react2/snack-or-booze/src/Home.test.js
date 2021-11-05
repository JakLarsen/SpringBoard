import React from 'react';
import { render} from '@testing-library/react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';



test("renders without crashing", ()=>{
  render(
    <BrowserRouter>
      <Route exact path="/">
          <Home/>
      </Route>
    </BrowserRouter>
  )
})

it('Matches snapshot', function(){
  const {asFragment} = render(<Home/>)
  expect(asFragment()).toMatchSnapshot()
});