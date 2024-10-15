import React from 'react'
 import "./menuItem.css"
 import {menu_list} from "../../../public/frontend_assets/assets"

const MenuItem = ({category,setCategory}) => {
  return (
    <div className='menuItem  flex flex-col gap-5' id='menu'>
        <h1 className='text-zinc-800 font-serif text-3xl'>Explore The taste</h1>
        <p className='max-w-[60%]'>Hunt Your favourit dishes. In our website We are happy to see you here   </p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                      <div className='explore-menu-list-item ' key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                        <img src={item.menu_image} className={category===item.menu_name?"active":""} alt='image not found' />
                        <p>{item.menu_name}</p>
                      </div>
                    )
                })
                
            }
        </div> 
        <hr className='m-1 h-1 bg-slate-300 border-none'/>
    </div>
  )
}

export default MenuItem
