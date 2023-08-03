import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact={true} />
      </BrowserRouter>
    </>
  );
};

export default App;
