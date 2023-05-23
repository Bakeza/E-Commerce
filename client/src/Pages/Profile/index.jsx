import React, { Component, useEffect, useState } from "react";

// import { API_URL } from "./../../config/api";

import { DataItem, InfoConatiner, ProfileContainer } from "./style";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Profile() {
  const [userData, setUserData] = useState({
    userName: "xsasxax",
    email: "",
    admin: "",
    isLoading: false,
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkIsAdmin();
  }, []);
  const checkIsAdmin = (email) => {
    if (email === "Salsabeelomar@gmail.com") {
      setIsAdmin(true); // Assuming setIsAdmin is a state setter function
    } else {
      setIsAdmin(false);
    }
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
  return (
    <>
      <ProfileContainer>
        <Avatar name="Foo Bar" color="#0d6efd" size="100" round={true} />
        <h1>{userData.userName}s Profile</h1>
        {userData.isLoading ? (
          "Loading..."
        ) : (
          <InfoConatiner>
            <p>Name:</p>
            <DataItem>{userData.userName}</DataItem>
            <p>Email:</p>
            <DataItem>{userData.email}</DataItem>
            {isAdmin && (
              <Link to={PATHS.CONTROlPANEl}>
                Show control panel <AiOutlineArrowRight />
              </Link>
            )}
          </InfoConatiner>
        )}
      </ProfileContainer>
    </>
  );
}
