import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { registerWatcher } from '../../container/actions/actionCreators'


const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch, "example");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input
            name="username"
            // defaultValue="scuola"
            ref={register({ required: true, maxLength: 20 })}
        />
        {errors.username && 'Username is required'}
        <input
            name="fullname"
            ref={register({ required: true, maxLength: 20 })}
        />
        {errors.fullname && 'Full name is required'}
        <input
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/
            })}
        />
        {errors.email && 'Please enter your email'}
        <input
            name="password"
            ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}
        <input
            name="passwordConfirmation"
            ref={register({ required: true })}
        />
        {errors.passwordConfirmation && 'Password does not match'}
        <input type='submit'/>
    </form>
  );
};

//grabbing only the piece of state we need 
// const mapStateToProps = state => ({ 
//     register: state.register
// })

export default connect(state => state.onboard, { registerWatcher })(Register);