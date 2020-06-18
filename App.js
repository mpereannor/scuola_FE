import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Register from './src/components/auth/Register'

const App = () => { 

    return (
        <div
            className='App'
        >
            SCUOLA!!!  
            {/* <Route
                path='/register'
                component={Register}
            />
            <PrivateRoute
                path='/home'
                component={Onboard}
            /> */}
        </div>
    )
}

export default App;