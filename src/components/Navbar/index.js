import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        Essential Oil Recipes
      </div>
      <div>
        <div className = "navbar-nav">
          <div className='nav-item'>
            <span onClick={props.onClick} value = 'favorites' className='nav-link'>Favorites</span>
          </div>
          <div className = "nav-item">
            <span onClick={props.onClick} value = 'all-recipes' className='nav-link'>All Recipes</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
