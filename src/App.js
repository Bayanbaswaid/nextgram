import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MyNavbar from "./components/navbar";
import MyProfilePage from "./pages/MyProfilePage";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <h3 className="m-3 d-flex justify-content-center">
//           this is react with web api demo
//         </h3>
//         <h5 className="m-3 d-flex justify-content-center">
//           empolyee manegmennt portal>
//         </h5>

//         <switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/users/:id" component={UserProfilePage} />
//         </switch>
//       </div>
//     </BrowserRouter>
//   );
// }

class App extends React.Component {
  state = {
    users: [""]
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users/")
      .then(result => {
        let users = result.data;
        // Update the state using this.setState()
        this.setState({
          users: users
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <MyNavbar />
        <BrowserRouter>
          {/* <div className="container">
            <h3 className="m-3 d-flex justify-content-center">
              this is react with web api demo
            </h3>
            <h5 className="m-3 d-flex justify-content-center">
              empolyee manegmennt portal>
            </h5> */}

          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <HomePage childUsers={this.state.users} {...props} />
              )}
            />
            <Route exact path="/users/me" component={MyProfilePage} />
            <Route path="/users/:id" component={UserProfilePage} />
          </Switch>
        </BrowserRouter>

        <Link to="/">Home</Link>
        <Link to="/users/me">My profile</Link>
      </div>
    );
  }
}

export default App;
