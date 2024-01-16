import { useState } from "react";
import LoginPage, { LogIn } from './Components/LoginPage/LoginPage/Login'
import ErrorPage from './Components/ErrorPage/Error'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  </Router>
  );

import Switch from "react-switch";
import LoginPage, {
  LogIn,
} 
from "./Components/RegisterEnLoginPages/LoginPage/Login";
import RegisterPage, {
  Register,
} from "./Components/RegisterEnLoginPages/RegisterPage/Register";
import ErrorPage from "./Components/Commonpages/ErrorPage/Error";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { GegevensInvullenUser } from "./Components/RegisterEnLoginPages/GegevensInvullenUser/GegevensInvullenUser";
import { GegevensInvullenVerzorgerOuder } from "./Components/RegisterEnLoginPages/GegevensInvullenVerzorgerOuder/GegevensInvullenVerzorgerOuder";
import { ChatpageBedrijven } from "./Components/ChatpageBedrijven/ChatpageBedrijven";
import { Chatpage } from "./Components/Chatpage/chatpage";
import { Loginbedrijven } from "./Components/RegisterEnLoginPages/LogInBedrijven/LoginBedrijven";
import { RegisterBedrijven } from "./Components/RegisterEnLoginPages/RegisterBedrijven/RegisterBedrijven";
import { MainPage } from "./Components/Commonpages/MainPage/MainPage";
import HomePage from "./Components/HomePage/LandingPage";
import Footer from "./Components/CommonComponents/Footer/Footer";
import { Onderzoekenpagina } from "./Components/Commonpages/Onderzoekpagina/Onderzoekenpagina";
import Onderzoek from "./Components/Commonpages/Onderzoekpagina/Onderzoek";



// <!--     // </Router>
// //  <GegevensInvullenVerzorgerOuder></GegevensInvullenVerzorgerOuder>
//  <RegisterPage></RegisterPage>
//       ); -->
// function App() {
//   return <Onderzoek></Onderzoek>;

// }

// export default App;
