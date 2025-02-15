import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
​
class SignUpForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkFormInput: true
  };
​
  handleClick = e => {
    e.preventDefault();
    this.props.changeForm();
  };
​
  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    const { signUpNewUser } = this.props;
​
    //do more validation for username
​
    if (!this.validateEmail(email)) {
      alert("Please key in correct email format");
      return;
    }
​
    if (password != confirmPassword) {
      alert("Password is not match correctly");
      return;
    }
​
    this.setState({ checkFormInput: true });
​
    console.log(
      `Username: ${username}, email: ${email}, pw: ${password}, cpw: ${confirmPassword}`
    );
​
    signUpNewUser(username, email, password);
  };
​
  handleInput = e => {
    const { username, email, password, confirmPassword } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
​
    if (username && email && password && confirmPassword) {
      // console.log(`Username: ${username}, email: ${email}, pw: ${password}, cpw: ${confirmPassword}`)
      this.setState({ checkFormInput: false });
    } else {
      this.setState({ checkFormInput: true });
    }
  };
​
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
​
  render() {
    const { checkFormInput } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" onChange={this.handleInput} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" onChange={this.handleInput} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" onChange={this.handleInput} />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            onChange={this.handleInput}
          />
        </FormGroup>
        <FormText>
          Already a member?{" "}
          <a onClick={this.handleClick} href="/" className="no-under-link">
            Log in here.
          </a>
        </FormText>
        <div className="submit-button-form">
          <Button disabled={checkFormInput} type="submit" color="primary">
            Sign Up
          </Button>
        </div>
      </Form>
    );
  }
}
​
export default SignUpForm;