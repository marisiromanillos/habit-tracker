import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getGoals } from "./GoalsSlice";

const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const GoalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  margin-bottom: 45px;
`;
const TitleSection = styled.div`
  font-weight: 900;
  color: #7a798e;
  font-size: 20px;
  jutify-content: center;
`;
const AddGoalBtn = styled.div`
  font-weight: 900;
  color: #403ded;
  font-size: 15px;
  display: flex;
  padding: 10px 30px;
  align-items: center;
  border-radius: 1.25rem;
  background: #f6f6fe;
  border: none;
`;

const GoalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 45px;
  margin-bottom: 45px;
  color: #7a798e;
  :last-child {
    margin-bottom: 0;
  }
`;
const Name = styled.div``;
const Action = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 20px;
    margin-right: 8px;
    :last-child {
      margin: 0;
    }
  }
`;

//array of goals

const Goals = () => {
  const allGoals = [
    { id: 0, name: "Lift Heavier 💪🏾" },
    { id: 1, name: "Code More 👩🏾‍💻" },
    { id: 2, name: "Eat Better 🥗" },
    { id: 3, name: "Sleep 8 Hours 😴" },
  ];

  //instance of dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch]);

  return (
    <>
      <GoalsContainer>
        <GoalsHeader>
          <TitleSection>Goals</TitleSection>
          <AddGoalBtn>Add Goal</AddGoalBtn>
        </GoalsHeader>
        {allGoals.map((goal, indx) => (
          <GoalRow key={goal.id}>
            <Name>{goal.name}</Name>
            <Action>
              <img src="edit.png" alt="edit-btn" />
              <img src="delete.png" alt="edit-btn" />
            </Action>
          </GoalRow>
        ))}
      </GoalsContainer>
    </>
  );
};

export default Goals;
