import React from 'react'
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import RecipeItem from '../components/RecipeItem/RecipeItem';
import Searchbar from '../components/Searchbar'
import { getFoodByName, getFoodById , getAllFood} from '../services/recipes';


const Home = () => {
  
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getAllFood().then((data) => 
    {
      setFoodList(data.meals)
    })}, [])

  
  return (
    <div>
    <Searchbar/>
    <div className='card-list'>
    {foodList.map((food) =>(
      <Link to ={`/info/${food.idMeal}`}>
          <RecipeItem foodName = {food.strMeal} img = {food.strMealThumb}/>
      </Link>
    ))}
    </div>
    </div>
  )
}

export default Home