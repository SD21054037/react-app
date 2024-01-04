import { useState } from "react";
import LoginPage, { LogIn } from "./Components/LoginPage/LoginPage/Login";
import RegisterPage, { Register } from "./Components/RegisterPage/Register";
import ErrorPage from "./Components/ErrorPage/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GegevensInvullenUser } from "./Components/GegevensInvullenUser/GegevensInvullenUser";
import { GegevensInvullenVerzorgerOuder } from "./Components/GegevensInvullenVerzorgerOuder/GegevensInvullenVerzorgerOuder";
import { ChatpageBedrijven } from "./Components/ChatpageBedrijven/ChatpageBedrijven";
import { Chatpage } from "./Components/Chatpage/chatpage";
import { Loginbedrijven } from "./Components/LogInBedrijven/LoginBedrijven";
import { RegisterBedrijven } from "./Components/RegisterBedrijven/RegisterBedrijven";
function App() {
  return (
    // <Router>

    //   <Routes>
    //     {/* <Route path="/login" element={<LoginPage />} /> */}
    //     {/* <Route path="/error" element={<ErrorPage />} /> */}
    //     <Route path="/register" element={<RegisterPage/>}/>
    //   </Routes>

    // </Router>
    <RegisterBedrijven></RegisterBedrijven>
      );
}

export default App;
