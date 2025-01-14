import React from "react";

function CategoryFilter({selectedCategory, categories, handleCategoryClick }) {

console.log(categories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button key={category}
                className={selectedCategory === category ? "selected" : null}
                onClick={() => handleCategoryClick(category)}
        >{category}</button>))}
    </div>
  );
}

export default CategoryFilter;
 