import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./cart.css"

const Cart = () => {
  const fee = 2;
  const {cartItem,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='cart mt-24'>
       <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Prices</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {
          food_list.map((item,index)=>{
            if(cartItem[item._id]>0)
              { return(<div  className="cart-item-items "key={index}>
                  <img src={item.image} className='w-20'/>
                  <p>{item.name}</p> 
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price*cartItem[item._id]}</p>
                  <p onClick={()=>{
                    removeFromCart(item._id)
                  } } className='cursor-pointer text-xl hover:text-red-700 hover:scale-y-100 transition duration-200'>X</p>
                 
                  <p></p>

              </div>  )
                    
              }
            
          })
        }
       </div>
       <div className="cart-bottom mt-28 mb-28 flex gap-[30%] max-sm:gap-12 ">
         <div className="cart-total flex flex-col  ">
            <h2 className='text-2xl mb-4'>Cart Total</h2>
            <div className='flex flex-col gap-5'>
              <div className="cart-total-details flex gap-72 text-lg">
                <p className='font-bold'>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr className='w-96'/>
              <div className="cart-total-details flex gap-[260px] text-lg">
                <p className='font-bold'>DeliveryFee</p>
                <p>{fee}</p>
              </div>
              <hr/>
              <div className="cart-total-details flex gap-72 text-lg">
                <b>
                  Total</b><b>Rs {getTotalCartAmount()+fee}</b>
              </div>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:scale-105  hover:bg-green-700 transition duration-300 ease-in-out">
  Buy Now
</button>
            </div>
       </div>
       <div className="cart-promocode">
        <div>
          <p>If you have promo code enter here</p>
          <div className="cart-promo-input flex  items-center">
            <input type='text' placeholder='enter promoCode' className='w-96 h-9 px-1 py-0 font-mono bg-slate-200'/>
            <button className=" bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:scale-105  hover:bg-green-700 transition duration-300 ease-in-out w-32 ">  Buy Now
            </button>
          </div>
        </div>
       </div>
       </div>
      
    </div>
  )
}

export default Cart
