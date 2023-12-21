import { useState } from "react";
import LoginPage from './Components/LoginPage/LoginPage/Login'
import RegisterPage, { Register } from './Components/RegisterPage/Register'
import ErrorPage from './Components/ErrorPage/Error'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return ( 
    // <Router>
    
    //   <Routes>
    //     {/* <Route path="/login" element={<LoginPage />} /> */}
    //     {/* <Route path="/error" element={<ErrorPage />} /> */}
    //     <Route path="/register" element={<RegisterPage/>}/>
    //   </Routes>
     
    // </Router>
    <LoginPage></LoginPage>
  
  );
}


export default App;


