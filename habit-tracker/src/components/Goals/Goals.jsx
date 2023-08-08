import React from "react";
import styled from "styled-components";

const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const GoalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 45px;
`;
const TitleSection = styled.div`
  font-weight: 900;
  color: #fff;
  font-size: 20px;
  jutify-content: center;
`;
const AddGoalBtn = styled.div`
  font-weight: 900;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const GoalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 45px;
  margin-bottom: 45px;
  color: #fff;
  :last-child {
    margin-bottom: 0;
  }
`;
const Name = styled.div`
  text-transform: uppercase;
`;
const Action = styled.div``;

//array of goals

const Goals = () => {
  const allGoals = [
    { id: 0, name: "lose weight" },
    { id: 1, name: "code more" },
    { id: 2, name: "eat better" },
    { id: 3, name: "sleep 8 hours" },
  ];

  return (
    <>
      <GoalsContainer>
        <GoalsHeader>
          <TitleSection>Goals</TitleSection>
          <AddGoalBtn>Add Goal</AddGoalBtn>
        </GoalsHeader>
        {allGoals.map((goal, indx) => (
          <GoalRow>
            <Name>{goal.name}</Name>
            <Action>Edit Delete</Action>
          </GoalRow>
        ))}
      </GoalsContainer>
    </>
  );
};

export default Goals;
