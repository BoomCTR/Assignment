import React from 'react'
import './RecipeItem.css';
const RecipeItem = ( {foodName, img}) => {
  return (
      <div className='card'>
        <div className='card-body'>
          <img src={img} alt='food'/>
        </div>
        <div className='card-header'>
          <h3 className='recipe-name' >{foodName}</h3>
        </div>
      </div>
  )
}

export default RecipeItem