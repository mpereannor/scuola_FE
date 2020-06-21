import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => { 

    return (
        <div
            className='App'
        >
            SCUOLA!!!  
            <Route
                path='/register'
                component={Register}
            />
            <Route
                path='/login'
                component={Login}
            />
            {/* <PrivateRoute
                path='/home'
                component={Onboard}
            />  */}
        </div>
    )
}

export default App;