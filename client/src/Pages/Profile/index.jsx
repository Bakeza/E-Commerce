import React, { Component, useContext, useState } from "react";

// import { API_URL } from "./../../config/api";

import { DataItem, InfoConatiner, ProfileContainer } from "./style";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";
import { UserContext } from "../../Context/UserContext";

export default function Profile() {
  // const [userData, setUserData] = useState({
  //   userName: "xsasxax",
  //   email: "",
  //   admin: "",
  //   isLoading: false,
  // });
  const { userData } = useContext(UserContext);
  console.log(userData);
  return (
    <>
      <ProfileContainer>
        <Avatar name="Foo Bar" color="#0d6efd" size="100" round={true} />
        {/* <h1>{userData.userName}s Profile</h1>
        {userData.isLoading ? (
          "Loading..."
        ) : (
          <InfoConatiner>
            <p>Name:</p>
            <DataItem>{userData.userName}</DataItem>
            <p>Email:</p>
            <DataItem>{userData.email}</DataItem>
            <Link to={PATHS.CONTROlPANEl}>Show control panel</Link>
          </InfoConatiner>
        )} */}
      </ProfileContainer>
    </>
  );
}
