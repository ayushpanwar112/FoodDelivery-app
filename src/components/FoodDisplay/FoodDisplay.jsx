import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../foodItem/Fooditem'



const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className=' mt-7' id='food-display'>
       <h2 className='font-light text-2xl'>Your favourite dishes ready for you</h2>
        <div className="grid gap-4 mt-7 gap-y-9 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
            { 
                food_list.map((item,index)=>{ 
                  
                  if(category==="All"|| category===item.category)
                  {
                     return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                  }
                   
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay
