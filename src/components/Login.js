/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';

class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    console.log('gfh', this.state);
    this.props.login(this.state.username, this.state.password);
  }

  changeEmail = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState(prev => ({
      ...prev,
      username: value,
    }));
  }

  changePassword = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState(prev => ({
      ...prev,
      password: value,
    }));
  }

  render() {
    console.log(this);
    // eslint-disable-next-line react/prop-types
    const { success, errorMsg } = this.props;
    if (success) {
      console.log('rrff');
      return <Redirect to={{pathname:'/profile'}} />
    }
    return (
      <Form href={success && '/profile'} onSubmit={this.handleSubmit}>
        <FormGroup>
          {errorMsg && <p>{errorMsg}</p>}
          <Label for="exampleEmail">Email</Label>
          <Input name="email" id="exampleEmail" placeholder="enter your email" onChange={this.changeEmail} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="enter your password" onChange={this.changePassword} />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

export default Login;
