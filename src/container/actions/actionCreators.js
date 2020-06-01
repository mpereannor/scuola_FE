import * as types from './actionTypes';
import { Axios, axioswithAuth } from '../utils/axios';

const registerUrl = 'api/auth/register'

export const register = (credentials) => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    Axios()
    .post(registerUrl, credentials)
    .then(res => { 
        localStorage.setitem('username', res.data.username);
        localStorage.setitem('token', res.data.token);
        localStorage.setitem('userId', res.data.id);
        dispatch({ 
            type: types.REGISTER_SUCCESS, payload: res.data
        })
    })
}