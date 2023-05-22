import React, { Component } from "react";

// import { API_URL } from "./../../config/api";

import { DataItem, InfoConatiner, ProfileContainer } from "./style";
import Avatar from "react-avatar";


export default class Profile extends Component {
  state = {
    userName: "xsasxax",
    email: "",
    admin: "",
    isLoading: false,
  };

  // async componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   const res = await axios.get(`${API_URL}/users/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   this.setState({
  //     userName: res.data.name,
  //     email: res.data.email,
  //     admin: res.data.isAdmin,
  //     isLoading: false,
  //   });
  // }

  render() {
    return (
      <>
        <ProfileContainer>
          <Avatar
            name="Foo Bar"
            color="#0d6efd"
            size="100"
            round={true}
          />
          <h1>{this.state.userName}s Profile</h1>
          {this.state.isLoading ? (
            "Loading..."
          ) : (
            <InfoConatiner>
              <p>Name:</p>
              <DataItem>{this.state.userName}</DataItem>
              <p>Email:</p>
              <DataItem>{this.state.email}</DataItem>
            </InfoConatiner>
          )}
        </ProfileContainer>
      </>
    );
  }
}
