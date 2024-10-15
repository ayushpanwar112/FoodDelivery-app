import React, { useContext } from 'react'
import { assets } from '../../../public/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'


const Fooditem = ({id,name,description,price,image}) => {

 const {addToCart, removeFromCart,cartItem} = useContext(StoreContext) 


    return (
    <div className=" m-auto rounded-1xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300" id='food-item'>
    <div className='relative'>
      <img src={image} className="food-item-img w-max"></img>
      {
        !cartItem[id]?<img src={assets.add_icon_white} className='absolute w-7 bottom-4 right-3 rounded-e-full cursor-pointer' onClick={()=>{addToCart(id)}}/>:
          <div className="absolute bottom-4 right-3 bg-white rounded-full flex justify-between gap-x-3 items-center cursor-pointer">
            <img src={assets.add_icon_green}  onClick={()=>{
                addToCart(id)}}/>
                 <p className='text-orange-600'>{cartItem[id]}</p>
                 <img src={assets.remove_icon_red} onClick={()=>{
                    removeFromCart(id)
                 }}/>
          </div>
        
             
             
             
      }
    </div>
     <div className=" p-5 ">
        <div className="flex justify-between align-middle mb-2">
            <p className='text-xl font-medium'>{name}</p>
            <img  className="w-20 h-5" src={assets.rating_starts}/>
        </div>
        <div className="text-slate-400 text-xs">
            <p>{description}</p>
        </div>
         <div className="food-item-price">Rs {price}</div>
     </div>
    </div>
  )
}

export default Fooditem
