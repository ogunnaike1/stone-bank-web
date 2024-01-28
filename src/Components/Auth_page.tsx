import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login_form from "./Login_form";
import SignUp_form from "./SignUp_form";
import Forgot_password_form from "./Forgot_password_form";

const Auth_page = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Outlet />
      <Routes>
        <Route
          path="login"
          element={
            <Login_form
              email={email}
              onSetEmail={(e) => setEmail(e.target.value)}
            />
          }
        ></Route>
        <Route
          path="forgot-password"
          element={<Forgot_password_form />}
        ></Route>
        <Route path="sign-up" element={<SignUp_form email={email} />}></Route>
      </Routes>
    </>
  );
};

export default Auth_page;
