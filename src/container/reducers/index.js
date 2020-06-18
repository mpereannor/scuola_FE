import * as types from '../actions/actionTypes';

const userModel = ['userID', 'username', 'fullname', 'email', 'password', 'passwordConfirmation', 'token'];

const initialOnboardingState = { 
    user_id : localStorage.getItem(userModel[0]) || '',
    username: localStorage.getItem(userModel[1]) || '',
    fullname: localStorage.getItem(userModel[2]) || '',
    email: localStorage.getItem(userModel[3]) || '',
    password: localStorage.getItem(userModel[4]) || '',
    passwordConfirmation: localStorage.getItem(userModel[5]) || '',
    token: localStorage.getItem(userModel[-1]),
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
                user_id: action.payload.id,
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
            }
        default:
            return state
    }

}