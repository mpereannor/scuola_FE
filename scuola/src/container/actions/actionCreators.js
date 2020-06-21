import * as types from './actionTypes';
import { Axios } from '../../utils/axios';

const registerUrl = 'api/auth/register';
const loginUrl = 'api/auth/login';

export const register = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    Axios()
    .post(registerUrl, credentials)
    .then(res => { 
        console.log(res)
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.id);
        dispatch({ 
            type: types.REGISTER_SUCCESS, payload: res.data
        });
    })
    .catch(error => { 
        dispatch({ 
            type: types.REGISTER_FAILURE, payload: error.message
        })
    })
}

export const login = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START});
    Axios()
    .post(loginUrl, credentials)
    .then(res => { 
        console.log(res)
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.id)
        dispatch({ 
            type: types.LOGIN_SUCCESS, payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.LOGIN_FAILURE, payload: error.message})
    })
}