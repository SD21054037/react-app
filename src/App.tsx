import { useState } from "react";
import LoginPage from './Components/LoginPage/LoginPage/Login'
import ErrorPage from './Components/ErrorPage/Error'
import { BrowserRouter as Router, Route,Link, Routes } from "react-router-dom";

function App() {
  

  return ( 
    <Router>
      <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/registreer">registreer</Link>
        <Link to="/error">error</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registreer" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      </div>
    </Router>
    
  );
}


export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import LoginPage from './pages/LoginPage';
// // import HomePage from './pages/HomePage';
// import Homep from './Components/HomePage/HomePage'
// const App: React.FC = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={LoginPage} />
//         <Route path="/home" component={Homep} />
//         {/* Add more routes for other pages as needed */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;