import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "components/Welcome/Welcome";
import MyHabits from "components/MyHabits/MyHabits";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Welcome} exact={true} />
          <Route path="/habits" Component={MyHabits} exact={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
}; 

export default App;
