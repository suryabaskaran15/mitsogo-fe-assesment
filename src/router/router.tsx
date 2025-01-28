import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUpPage from "../pages/Signup";
import SignInPage from "../pages/SignIn";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default Routing;
