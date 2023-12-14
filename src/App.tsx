import { useState } from "react";
import LoginPage from './Components/LoginPage/LoginPage/Login'
import RegisterPage from './Components/RegisterPage/Register'
import ErrorPage from './Components/ErrorPage/Error'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return ( 
    <Router>
      <div>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/error" element={<ErrorPage />} /> */}
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      </div>
    </Router>
  );
}


export default App;