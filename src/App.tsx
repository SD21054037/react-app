import { useState } from "react";
import LoginPage, { LogIn } from './Components/LoginPage/LoginPage/Login'
import ErrorPage from './Components/ErrorPage/Error'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return ( 
    <Router>
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  </Router>
  );
}


export default App;
