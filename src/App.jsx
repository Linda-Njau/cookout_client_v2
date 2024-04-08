import './App.css';
import UserRecipes from './UserRecipes';
import SearchRecipes from './SearchRecipes';
import Login from './Login';


function App() {

  return (
   <div id="app-container">
    <nav className="navbar">
        <div className="navbar__logo"></div>
    </nav>
      <div><UserRecipes /></div>
      <div><SearchRecipes /></div>
      <div><Login /></div>
   </div>
  )
}

export default App
