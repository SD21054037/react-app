import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Components/RegisterEnLoginPages/LoginPage/Login";
import Register from "../Components/RegisterEnLoginPages/RegisterPage/Register";
import { GegevensInvullenUser } from "../Components/RegisterEnLoginPages/GegevensInvullenUser/GegevensInvullenUser";
import { GegevensInvullenVerzorgerOuder } from "../Components/RegisterEnLoginPages/GegevensInvullenVerzorgerOuder/GegevensInvullenVerzorgerOuder";
import { Loginbedrijven } from "../Components/RegisterEnLoginPages/LogInBedrijven/LoginBedrijven";
import { RegisterBedrijven } from "../Components/RegisterEnLoginPages/RegisterBedrijven/RegisterBedrijven";
import HomePage from "../Components/HomePage/HomePage";

const router = createBrowserRouter([

    {path: '/gegevensinvullenuser', element: <GegevensInvullenUser/>},
    {path: '/gegevensinvullenverzorger', element: <GegevensInvullenVerzorgerOuder/>},
    {path: '/loginbedrijven', element: <Loginbedrijven/>},
    {path: '/registerbedrijven', element: <RegisterBedrijven/>},
    {path: '/login', element: <LogIn/>},
    {path: '/register', element: <Register/>},
    {path: '/', element: <HomePage/>},
    
    
]
);


export default router;

