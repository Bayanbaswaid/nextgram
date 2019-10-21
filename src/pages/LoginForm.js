import React from "react";
import axios from "axios";
import { FormText, Form, FormGroup, Label, Input, Button } from "reactstrap";
​
export default class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    checkFormInput: true,
    isError: false,
   
  };
​
  handleClick = e => {
    e.preventDefault();
    this.props.changeForm();
  };
​
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { checkLoginStatus} = this.props;
​
    if (username && password) {
      // console.log("Username : " + username + " password : " +password)
    }
​
    this.setState({ checkFormInput: true, isError: false });
​
    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        username: username,
        password: password
      }
    })
      .then(response => {
        // console.log(response.data)
        const { auth_token } = response.data;
        if (auth_token) {
          localStorage.setItem("jwt", auth_token);
          localStorage.setItem("userData", JSON.stringify(response.data.user));
        }
​
        checkLoginStatus(true);
      
      })
      .catch(error => {
        console.log(error.response)
        // console.log(error.response.data)
        // const { message } = error.response.data;
        // this.setState({
        //   checkFormInput: false,
        //   isError: true,
        //   erroMsg: message
        // });
        //   setTimeout(() => {
        // this.setState({ isError:false});
        //   }, 3000)
      });
  };
​
  handleInput = e => {
    const { username, password } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
​
    if (username && password) {
      
      this.setState({ checkFormInput: false });
    } else {
      this.setState({ checkFormInput: true });
    }
  };
​
  
​
  render() {
    const { checkFormInput } = this.state;
​
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="username" name="username" onChange={this.handleInput} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" onChange={this.handleInput} />
        </FormGroup>
        <FormText>
          New member?{" "}
          <a onClick={this.handleClick} href="/" className="no-under-link">
            Sign up here.
          </a>
        </FormText>
        <div className="submit-button-form">
          <Button disabled={checkFormInput} type="submit" color="primary">
            Login
          </Button>
        </div>
      </Form>
    );
  }
}