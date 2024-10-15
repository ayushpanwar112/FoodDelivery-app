import { createContext, useEffect, useState } from "react";
import { food_list } from "../../public/frontend_assets/assets";



export const StoreContext = createContext(null)
const StoreContextProvider =(props)=>{
 
          const [cartItem,setCardItem] =useState({});
          const addToCart=(itemId)=>{
            if(!cartItem[itemId]){
              setCardItem((prev)=>({...prev,[itemId]:1}))
            }
            else {
                   setCardItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
          }
           const removeFromCart=(itemId)=>{
                  setCardItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
           }
             const getTotalCartAmount =()=>{
              let totalAmount = 0;
              for(const item in cartItem)
              {
                if(cartItem[item]>0)
                {
                  let iteminfo = food_list.find((product)=>(product._id===item))
                  totalAmount+=iteminfo.price*cartItem[item];
                }
              }
                 return totalAmount
             }

    const contextValue = {
        food_list,
        addToCart,
        removeFromCart,
        cartItem,
      getTotalCartAmount
    }
      useEffect(()=>{
         console.log(getTotalCartAmount())
      },[cartItem])
     return (
       <StoreContext.Provider value = {contextValue}>
          {
            props.children
          }
       </StoreContext.Provider>
     )
}
export default StoreContextProvider