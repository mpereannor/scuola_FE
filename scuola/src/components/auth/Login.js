import React from 'react';
import  { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../container/actions/actionCreators';

const Login = (props) => { 
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => props.login(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>email</p>
            <input
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/
                })}
            />
            {errors.email && 'Please enter your email'}
            <p>password</p>
            <input
                name="password"
                ref={register({ required: true })}
            />
            {errors.password && 'Password is required'}
            <input type='submit'/>
        </form>
    );
};

export default connect(state => state.onboard, { login })(Login);