import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "components/Welcome/Welcome";
import MyHabits from "components/MyHabits/MyHabits";
import Register from "components/User/Register/Register";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Welcome} exact={true} />
          <Route path="/habits" Component={MyHabits} exact={true} />
          <Route path="/register" Component={Register} exact={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
