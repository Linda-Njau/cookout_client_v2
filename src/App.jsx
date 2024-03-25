import './App.css';
import RecipeForm from './RecipeForm';
import UserRecipes from './UserRecipes';


function App() {

  return (
   <div id="app-container">
    <nav className="navbar">
        <div className="navbar__logo"></div>
    </nav>
      <div><RecipeForm /></div>
      <div><UserRecipes /></div>
   </div>
  )
}

export default App
