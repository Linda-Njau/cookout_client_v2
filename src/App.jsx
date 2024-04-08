import { Link , BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UserRecipes from './UserRecipes';
import SearchRecipes from './SearchRecipes';
import Login from './Login';


function App() {

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
      <Route path="/UserRecipes" element={<UserRecipes />} />
      <Route path="/Login" element={<Login />} />
        </Routes>
        </div>
   </div>
   </Router>
  )
}

export default App
