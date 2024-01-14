import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Components/RegisterEnLoginPages/LoginPage/Login";
import Register from "../Components/RegisterEnLoginPages/RegisterPage/Register";
import { GegevensInvullenUser } from "../Components/RegisterEnLoginPages/GegevensInvullenUser/GegevensInvullenUser";
import { GegevensInvullenVerzorgerOuder } from "../Components/RegisterEnLoginPages/GegevensInvullenVerzorgerOuder/GegevensInvullenVerzorgerOuder";
import { Loginbedrijven } from "../Components/RegisterEnLoginPages/LogInBedrijven/LoginBedrijven";
import { RegisterBedrijven } from "../Components/RegisterEnLoginPages/RegisterBedrijven/RegisterBedrijven";
import HomePage from "../Components/HomePage/LandingPage";
import ErrorPage from "../Components/Commonpages/ErrorPage/Error";
import { MainPage } from "../Components/Commonpages/MainPage/MainPage";
import { Onderzoekpagina } from "../Components/Commonpages/Onderzoekpagina/Onderzoekenpagina";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LogIn /> },
      { path: "register", element: <Register /> },
      { path: "registerBedrijven", element: <RegisterBedrijven /> },
      { path: "loginBedrijven", element: <Loginbedrijven /> },
      { path: "gegevensinvullenuser", element: <GegevensInvullenUser /> },
    ],
  },
  { path: "mainpage", element: <MainPage /> },
  { path: "onderzoekenpage", element: <Onderzoekpagina /> },
]);

export default router;
