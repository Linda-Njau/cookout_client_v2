import { useState, useEffect } from 'react';
import { Link , BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UserRecipes from './UserRecipes';
import SearchRecipes from './SearchRecipes';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
      setUserId(localStorage.getItem('user_id'));
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  })
  return (
    <Router>
   <div id="app-container">
    <nav className="navbar">
        <div className="navbar__logo"></div>
        <Link to="/UserRecipes">
          <button>User Recipes</button>
        </Link>
        <Link to="/">
          <button>Search Recipes</button>
        </Link>
        <Link to="/Login">
        <button>Login</button>
        </Link>
    </nav>
    <div>
    <Routes>
      <Route path="/" element={<SearchRecipes />} />
      <Route path="/UserRecipes" element={<UserRecipes userId={userId}/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
        </div>
   </div>
   </Router>
  )
}

export default App
