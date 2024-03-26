import './App.css';
import RecipeForm from './RecipeForm';
import UserRecipes from './UserRecipes';
import SearchRecipes from './SearchRecipes';


function App() {

  return (
   <div id="app-container">
    <nav className="navbar">
        <div className="navbar__logo"></div>
    </nav>
      <div><RecipeForm /></div>
      <div><UserRecipes /></div>
      <div><SearchRecipes /></div>
   </div>
  )
}

export default App
