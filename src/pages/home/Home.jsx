import React, { useState } from 'react'
import "./home.css"
import Header from "../../components/header/Header"
import MenuItem from '../../components/menuItem/MenuItem'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [category,setCategory]= useState("All")

  return (
    <div>
          <Header/>
          <MenuItem category={category} setCategory={setCategory}/>
          <FoodDisplay category={category}/>
       <h1> home page</h1>
    </div>
  )
}

export default Home
