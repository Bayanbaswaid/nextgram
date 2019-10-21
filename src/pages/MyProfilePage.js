import React from "react";
import axios from "axios";
import loadingIndicator from "../components/loadingIndicator";

class MyProfilePage extends React.Component {
  state = {
    childLoading: true
  };

  componentDidMount() {
    const jwt = localStorage.getItem("userToken");

    axios
      .get("https://insta.nextacademy.com/api/v1/images/me", {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      .then(response => {
        const { checkAuthorize } = this.props;
        console.log(response);
        this.setState({ childLoading: false });
      })
      .catch(error => {
        // console.log(error.response)
        this.setState({ childLoading: false });
      });
  }

  render() {
    const { childLoading } = this.state;

    return (
      <div>
        {localStorage.getItem("jwt") ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
      </div>
    );
  }
}

export default MyProfilePage;
