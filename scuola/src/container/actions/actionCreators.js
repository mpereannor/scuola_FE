import * as types from './actionTypes';
import { Axios } from '../../utils/axios';

const registerUrl = 'api/auth/register'

export const register = (credentials, history) => dispatch => { 
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
        // history.push('/')

    })
    .catch(error => { 
        dispatch({ 
            type: types.REGISTER_FAILURE, payload: error.message
        })
    })
}

