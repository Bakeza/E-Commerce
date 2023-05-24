import React, { Component, useContext, useEffect, useState } from "react";

// import { API_URL } from "./../../config/api";

import { DataItem, InfoConatiner, ProfileContainer } from "./style";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { UserContext } from "../../Context/UserContext";

export default function Profile() {
  const [isAdmin, setIsAdmin] = useState(false);
  const {userData, setUserData}= useContext(UserContext);

  console.log( " userData",userData);
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
            <DataItem></DataItem>
            <p>Email:</p>
            <DataItem></DataItem>
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
