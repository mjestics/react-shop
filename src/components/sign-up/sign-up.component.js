import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password, confirmPassword, displayName} = this.state;
        const {signUpStart} = this.props;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({email, password, displayName});
    };

    render() {
        const {email, password, confirmPassword, displayName} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account </h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        onChange={this.handleChange}
                        label='Display name'
                        value={displayName}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        onChange={this.handleChange}
                        label='Email'
                        value={email}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        label='Password'
                        value={password}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        onChange={this.handleChange}
                        label='Confirm password'
                        value={confirmPassword}
                        required
                    />
                    <CustomButton type='submit'>Create</CustomButton>
                </form>
            </div>
        )

    }
}

const mapDistpatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDistpatchToProps)(SignUp);