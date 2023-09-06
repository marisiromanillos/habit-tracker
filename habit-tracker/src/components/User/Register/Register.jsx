import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "features/UserSlice";
import { useDispatch, useSelector } from "react-redux";

//css
const PageContainer = styled.div``;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTitle = styled.div`
  font-size: 30px;
  padding-top: 100px;
  padding-bottom: 25px;
`;
const FormContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  label {
    margin-bottom: 5px;
  }
  input {
    padding: 5px;
    border: 2px solid #e3e3e3;
    :focus {
      outline: 2px solid #9da631;
      border: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9da631;
  font-weight: bold;
`;
const SubmitButton = styled.div`
  cursor: pointer;
  background-color: #9da631;
  border: none;
  border-radius: 2px;
  padding: 8px 10px 8px 10px;
  color: white;
  font-family: inherit;
  font-size: inherit;
  :focus {
    outline: none;
    border: none;
  }
`;

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const userState = useSelector((state) => state.user);

  const { error } = userState.registerState;

  const handleUserInfoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(registerUser(userInfo));
  };

  const findError = (sectionName) => {
    const errorObj = error.find((err) => err.param === sectionName);
    return errorObj ? errorObj.msg : null;
  };

  return (
    <>
      <PageContainer>
        <RegisterContainer>
          <FormTitle>Register</FormTitle>
          <FormContainer>
            <InputSection>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                maxLength="60"
                onInput={handleUserInfoChange}
              />
            </InputSection>
            <InputSection>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                maxLength="32"
                onInput={handleUserInfoChange}
              />
            </InputSection>
            <InputSection>
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                maxLength="32"
                onInput={handleUserInfoChange}
              />
            </InputSection>
            <InputSection>
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                maxLength="50"
                onInput={handleUserInfoChange}
              />
            </InputSection>
            <InputSection>
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                maxLength="50"
                onInput={handleUserInfoChange}
              />
            </InputSection>
            <ButtonContainer>
              <SubmitButton type="submit" onClick={handleSubmit}>
                Register
              </SubmitButton>
            </ButtonContainer>
          </FormContainer>
          <div>
            Already have an account? {""}
            <StyledLink to="/signin">Login Here</StyledLink>
          </div>
        </RegisterContainer>
      </PageContainer>
    </>
  );
};

export default Register;
