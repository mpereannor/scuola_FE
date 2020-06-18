// import * as types from './actionTypes';
// import { Axios, axioswithAuth } from '../utils/axios';

// const registerUrl = 'api/auth/register'

// export const register = (credentials) => dispatch => { 
//     dispatch({ type: types.REQUEST_START });
//     Axios()
//     .post(registerUrl, credentials)
//     .then(res => { 
//         localStorage.setitem('username', res.data.username);
//         localStorage.setitem('token', res.data.token);
//         localStorage.setitem('userId', res.data.id);
//         dispatch({ 
//             type: types.REGISTER_SUCCESS, payload: res.data
//         })
//     })
//     .catch(error => { 
//         dispatch({ 
//             type: types.REGISTER_FAILURE, payload: error.message
//         })
//     })
// }

import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes'
import { Axios } from '../../utils/axios'


// const registerUrl = 'api/auth/register'
const registerUrl = 'localhost:7000/api/auth/register'

function registerApi(credentials) { 
    Axios()
    .post(registerUrl, credentials)
    .then((response) => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function* registerFlow (action) {
    try { 
        const { email, password } = action;

        const response = yield call(registerApi, email, password );
        yield put({ type: types.REGISTER_SUCCESS, response })
    } catch(error) {
        yield put({ type: types.REGISTER_FAILURE, error})
    }
}

function* registerWatcher () {
    yield takeLatest(types.REQUEST_START, registerFlow)
} 

export default registerWatcher