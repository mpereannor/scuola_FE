import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { register } from '../../container/actions/actionCreators'


const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
  const onSubmit = data => props.register(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>username</p>
        <input
            name="username"
            ref={register({ required: true, maxLength: 20 })}
            />
        {errors.username && 'Username is required'}
        <p>fullname</p>
        <input
            name="fullname"
            ref={register({ required: true, maxLength: 20 })}
            />
        {errors.fullname && 'Full name is required'}
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
        <p>password confirmation</p>
        <input
            name="passwordConfirmation"
            ref={register({ required: true })}
        />
        {errors.passwordConfirmation && 'Password does not match'}
        <input type='submit'/>
    </form>
  );
};

export default connect(state => state.onboard, { register })(Register);