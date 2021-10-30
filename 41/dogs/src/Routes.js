import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Dogs from './Dogs';
import Dog from './Dog';



const Routes = () => {
     return (
         <>
            <Route exact path='/dogs'><Dogs/></Route>
            <Route exact path='/dogs/:name'><Dog/></Route>
            <Redirect to='/dogs'/>
        </>
     )
}

export default Routes