import React from "react";
import styled from "styled-components";
import Goals from "components/Goals";

// Container setUp

const GridContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "nav"
    "main";
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;
`;

//NavBar

const NavContainer = styled.div`
  grid-area: "nav";
  padding-top: 15px;
  padding-left: 100px;
  background-color: #d1d0fb;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 100px;
  color: #403ded;
`;

// MainSection
const MainContainer = styled.div`
  grid-area: "main";
  padding-top: 15px;
  padding-right: 100px;
`;

//HeaderContainer

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

const HeaderItem = styled.div`
  font-size: 20px;
`;

const MyHabitsDesktop = () => {
  return (
    <>
      <GridContainer>
        <NavContainer>
          <Title>Sistency</Title>
          <Goals />
        </NavContainer>
        <MainContainer>
          <HeaderContainer>
            <HeaderItem>My Habits</HeaderItem>
            <HeaderItem>History</HeaderItem>
            <HeaderItem>Hi Marisi</HeaderItem>
          </HeaderContainer>
        </MainContainer>
      </GridContainer>
    </>
  );
};

export default MyHabitsDesktop;
