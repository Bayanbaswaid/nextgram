// import React from "react";
// import axios from "axios";
// import UserImages from "../containers/UserImages";
// ​
// class UserProfilePage extends React.Component {
//   state = {
//     users:[],
//     images:[]
// };

//   componentDidMount() {
//     axios
//       .get(
//         "https://insta.nextacademy.com/api/v1/images?userId=<:id>")
//       .then(result => {
//         this.setState({
//           users: result.data
//         });
//       })
//       .catch(error => {
//       });
//   }
//   render() {
//     console.log(this.state.users.id);
//     return (
//       <>
//         <h1>User Profile Page</h1>
// ​
//         {this.state.users.username}
//         <img
//           className="border rounded-circle"
//           src={this.state.users.profileImage}
//           alt={this.state.users.username}
//           width="200"
//         />
// ​
//         <UserImages childId={this.props.match.id} />
//       </>
//     );
//   }
// }
// ​
// export default UserProfilePage;
