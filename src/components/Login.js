/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
  }

  handleEvent = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
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
    return (
      <Form>
        <FormGroup>
          {errorMsg && <p>{errorMsg}</p>}
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter your email" onChange={this.changeEmail} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="enter your password" onChange={this.changePassword} />
        </FormGroup>
        <Button onClick={this.handleEvent}><Link to={success && '/profile'}>Login</Link></Button>
      </Form>
    );
  }
}

export default Login;
