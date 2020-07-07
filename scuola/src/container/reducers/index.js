import * as types from '../actions/actionTypes';
import Cookies from 'js-cookie';
const initialOnboardingState = { 
    cookie: Cookies.get('token') || '',
    username: Cookies.get('username') || '',
    id: Cookies.get('id'),
    fullname: Cookies.get('fullname') || '',
    email: Cookies.get('email') || '',
    password: Cookies.get('password') || '',
    // id : localStorage.getItem('id') || '',
    // username: localStorage.getItem('username') || '',
    // fullname: localStorage.getItem('fullname') || '',
    // email: localStorage.getItem('email') || '',
    // password: localStorage.getItem('password') || '',
    // passwordConfirmation: localStorage.getItem('passwordConfirmation') || '',
    // token: localStorage.getItem('token'),
    message: '',
    error: {},
    isFetching: false, 
    isLoggedIn: false 
};

export const onboardingReducer = (state = initialOnboardingState, action) => {
    switch (action.type) {
        case types.REQUEST_START:
            return { 
                ...state,
                isFetching: true,
                error: ''
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                message: action.payload.message,
                isFetching: false, 
                isLoggedIn: true
            };

        case types.REGISTER_FAILURE: 
            return { 
                ...state,
                error: action.payload,
                isFetching: false
            };
        
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isFetching: false,
                isLoggedIn: true,
            };
        
        case types.LOGIN_FAILURE:
            return{ 
                ...state,
                error: action.payload,
                isFetching: false
            }

        case types.LOGOUT:
            return {
                ...state, 
                error: action.payload
            }

        default:
            return state
    }

};


const initialUsers = { 
    users: [],
    error: {},
    isFetching: false
}

export const userViewReducer = (state = initialUsers, action) => { 
    switch (action.type) { 
        case types.REQUEST_START:
            return { 
                ...state, 
                isFetching: true
            };

        case types.GET_USERS_SUCCESS:
            return {
                ...state, 
                users: action.payload,
                isFetching: false
            };

        case types.GET_USERS_FAILURE:
            return{
                ...state, 
                error: action.payload,
                isFetching: false
            }
        default: 
            return{
                ...state, 
                isFetching: false
            }

    }   
}