import { useState } from "react";
import LoginPage, { LogIn } from "./Components/RegisterEnLoginPages/LoginPage/Login";
import RegisterPage, { Register } from "./Components/RegisterEnLoginPages/RegisterPage/Register";
import ErrorPage from "./Components/ErrorPage/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GegevensInvullenUser } from "./Components/RegisterEnLoginPages/GegevensInvullenUser/GegevensInvullenUser";
import { GegevensInvullenVerzorgerOuder } from "./Components/RegisterEnLoginPages/GegevensInvullenVerzorgerOuder/GegevensInvullenVerzorgerOuder";
import { ChatpageBedrijven } from "./Components/ChatpageBedrijven/ChatpageBedrijven";
import { Chatpage } from "./Components/Chatpage/chatpage";
import { Loginbedrijven } from "./Components/RegisterEnLoginPages/LogInBedrijven/LoginBedrijven";
import { RegisterBedrijven } from "./Components/RegisterEnLoginPages/RegisterBedrijven/RegisterBedrijven";


function App() {
  return (
    // <Router>

    //   <Routes>
    //     {/* <Route path="/login" element={<LoginPage />} /> */}
    //     {/* <Route path="/error" element={<ErrorPage />} /> */}
    //     <Route path="/register" element={<RegisterPage/>}/>
    //   </Routes>

    // </Router>
 <GegevensInvullenVerzorgerOuder></GegevensInvullenVerzorgerOuder>
      );
}

export default App;
