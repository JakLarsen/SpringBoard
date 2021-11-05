import React from 'react';
import { render} from '@testing-library/react';
import NotFound from './NotFound'



test("renders without crashing", ()=>{
  render(
    <NotFound/>
  )
})

it('Matches snapshot', function(){
  const {asFragment} = render(
    <NotFound/> 
  )
  expect(asFragment()).toMatchSnapshot()
});