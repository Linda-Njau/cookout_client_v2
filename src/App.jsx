import './App.css';
import RecipeForm from './RecipeForm';
import logoImage from './assets/logo.png';


function App() {

  return (
   <div id="app-container">
    <nav className="navbar">
        <div className="navbar__logo"></div>
        <img src={logoImage} alt="Cookout logo" />
    </nav>
      <RecipeForm />
   </div>
  )
}

export default App
