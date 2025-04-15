import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./App.css";
import { AuthApi } from "./api";

function App() {
  const authApi = new AuthApi();

  authApi
    .apiV1AuthLoginPost({ email: "hackmann657@gmail.com", password: "string" })
    .then((response) => {
      console.log(response.data);
    });
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
