import React from "react";

import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
