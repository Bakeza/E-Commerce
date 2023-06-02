import React, { Component, useContext, useEffect, useState } from "react";

import { DataItem, InfoConatiner, ProfileContainer } from "./style";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { UserContext } from "../../Context/UserContext";
import { Spinner } from "../../global/style";

export default function Profile() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

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
        <h1>{userData.name}s Profile</h1>
        {!userData ? (
          <Spinner />
        ) : (
          <InfoConatiner>
            <p>Name:</p>
            <DataItem>{userData.name}</DataItem>
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
