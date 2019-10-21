import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
​
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoginForm: true
    };
​
    this.toggle = this.toggle.bind(this);
  }
​
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
​
  changeForm = () => {
    const { isLoginForm } = this.state;
    this.setState({ isLoginForm: !isLoginForm });
  };
​
  handleSubmit = event => {
    event.preventDefault();
  };
​
  render() {
    const { isLoginForm } = this.state;
    const { checkLoginStatus, handleNotification } = this.props;
    return (
      <div>
        {isLoginForm ? (
          <LoginForm
            changeForm={this.changeForm}
            checkLoginStatus={checkLoginStatus}
            handleNotification={handleNotification}
          />
        ) : (
          <SignUpForm
            changeForm={this.changeForm}
            checkLoginStatus={checkLoginStatus}
            handleNotification={handleNotification}
            signUpNewUser={this.props.signUpNewUser}
          />
        )}
      </div>
    );
  }
}
​
export default LoginPage;