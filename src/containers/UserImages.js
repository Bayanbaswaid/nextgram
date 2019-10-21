import React from "react";
import axios from "axios";
import ImagePlaceHolder from "react-graceful-image";

class UserImages extends React.Component {
  state = {
    imageURL: "https://insta.nextacademy.com/api/v1/images?userId=",
    image: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get(this.state.imageURL + this.props.childID)
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({
          image: result.data,
          isLoading: false
        });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    let data;
    if (this.state.isLoading) {
      data = (
        <ImagePlaceHolder
          src=""
          width="175"
          height="175"
          alt="Your profile image"
        />
      );
    } else {
      //data = <img src={this.state.image} alt="user pp"/>
      data = this.state.image.map((image, index) => {
        return (
          <ImagePlaceHolder
            src={image}
            width="175"
            height="175"
            className="m-2"
            cellspacing="3"
            span="3"
            cellpadding="3"
            alt="Your profile image"
          ></ImagePlaceHolder>
        );
      });
    }

    return <span>{data}</span>;
  }
}

export default UserImages;
