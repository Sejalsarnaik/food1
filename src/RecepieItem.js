import React from 'react';
import './RecepieItem.css';

function RecepieItem({ recipe }) {
  return (
    <div>
      <h2 className='recepie-label'>{recipe.label}</h2>
      <img className="recepie-image"src={recipe.image} alt={recipe.label} />
      {/* You can display other information about the recipe here */}
    </div>
  );
}

export default RecepieItem;
