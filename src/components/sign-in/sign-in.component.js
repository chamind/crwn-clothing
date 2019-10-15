import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in.styles.sass';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />

          <CustomButton type="submit" value="">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
