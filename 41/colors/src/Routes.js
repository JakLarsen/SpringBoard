import {Route, Redirect} from 'react-router-dom'

import Color from './Color'
import ColorForm from './ColorForm'
import Home from './Home'




const Routes = () => {

    return (
        <>
            {/* Home isn't rendering?? when we have the Redirect?? */}
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/colors'>
                <ColorForm/>
            </Route>
            <Route exact path='/colors/:color'>
                <ColorForm/>
                <Color/>
            </Route>
            <Redirect to='/colors'/>
        </>
    )
}

export default Routes