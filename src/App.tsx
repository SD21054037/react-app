// import { useState } from "react";
// import LoginPage from './Components/LoginPage/LoginPage/Login'
// import RegisterPage from './Components/RegisterPage/Register'
// import ErrorPage from './Components/ErrorPage/Error'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// function App() {
//   return ( 
//     <Router>
//       <div>
//       <Routes>
//         {/* <Route path="/login" element={<LoginPage />} /> */}
//         {/* <Route path="/error" element={<ErrorPage />} /> */}
//         <Route path="/register" element={<RegisterPage/>}/>
//       </Routes>
//       </div>
//     </Router>
//   );
// }


// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
  title: string;
  completed: boolean;
}

const RegisterPage: React.FC = () => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodoData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [clicked]);

  return (
    <div>
      <h1>Register Page</h1>
      <button onClick={() => setClicked(!clicked)}>easy money</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        clicked && (
          <div>
            <h2>API DATA</h2>
            <ul>
              {todoData.map(todo => (
                <li key={todo.title}>{todo.title}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default RegisterPage;

