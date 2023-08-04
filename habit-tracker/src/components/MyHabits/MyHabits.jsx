import React from "react";
import styled from "styled-components";

// Defines Desktop and Mobile Containers
const DesktopContainer = styled.div`
  @media only screen and (max-width: 699px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

const MyHabits = () => {
  return (
    <>
      <DesktopContainer>{/* <MyHabitsDesktop /> */}</DesktopContainer>
      <MobileContainer>Mobile</MobileContainer>
    </>
  );
};

export default MyHabits;
