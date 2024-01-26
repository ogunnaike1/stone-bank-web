import "./App.scss";
import Login_form from "./Components/Login_form";
import SignUp_form from "./Components/SignUp_form";
import Forgot_password_form from "./Components/Forgot_password_form";
import Reset_password_form from "./Components/Reset_password_form";
import Dashboard_page from "./Components/Dashboard_page";
import Transfer_page from "./Components/Transfer_page";
import History from "./Components/History";

import { useState } from "react";

const App = () => {
  const [authForm, setAuthForm] = useState("login");
  return (
    <div className="App">
      {/* {authForm === "login" && (
        <Login_form
          onClick={() => {
            setAuthForm("signup");
          }}
          forgotPassword={() => {
            setAuthForm("forgot-password");
          }}
        />
      )}
      {authForm === "signup" && (
        <SignUp_form
          onClick={() => {
            setAuthForm("login");
          }}
        />
      )}
      {authForm === "forgot-password" && (
        <Forgot_password_form onClick={() => {setAuthForm("login");}} />
      )} */}
      {/* <Reset_password_form/> */}
      {/* <Dashboard_page/> */}
      {/* <Transfer_page/> */}
      <History/>
    </div>
  );
};

export default App;
