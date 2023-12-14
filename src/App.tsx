import { useState } from "react";
import LoginPage from './Components/LoginPage/LoginPage/Login'
import ErrorPage from './Components/ErrorPage/Error'
import { Routes } from "react-router-dom";

function App() {
  

  return (
    
    <div>
      
          <LoginPage />

    </div>
    
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