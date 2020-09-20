import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search row justify-content-center">
      <div className="form-group col-6 ">
        <input
          value={props.search}
          onChange = {props.handleInputChange}
          name='oil-name'
          list='oils'
          type="text"
          className="form-control"
          placeholder="Search by recipe..."
          id="oil-name"
        />
        <datalist id="oils">
          {props.recipes.map(recipe => (
            <option value={recipe.name} key={recipe.id} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-light">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
