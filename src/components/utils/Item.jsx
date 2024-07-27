// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch } from 'react-redux';
import { setAddItemToCart,setOpenCart } from "../../app/CartSlice";
import PropTypes from 'prop-types';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
const Item = ({popular,id, title,text,rating, btn, img, price, color, shadow}) => {
    const dispatch = useDispatch()
    const onAddToCart = () =>{
        const item = {id, title,text,rating,  img, price, color, shadow}
        dispatch(setAddItemToCart(item))
    }
    const onCartToggle = () => {
        dispatch(setOpenCart({cartState:true}))
    }
    return (
    <>
    <div id = {id}
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${popular?' justify-items-start':' justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className={`grid items-center ${popular?' justify-items-start':' justify-items-center'} `}>
            <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
            <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>

            <div className='flex items-center justify-between w-28 my-2'>
                <div className='flex items-center bg-white/80 px1 rounded'>
                    <h1 className='text-black text-sm font-medium blur-effect-theme'>${price}</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
                     <h1 className='md:text-sm font-normal text-slate-100'>
                        {rating}
                    </h1>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button onClick={()=> onAddToCart()} type='button' className='bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200'>
                    <ShoppingBagIcon className=' icon-style text-slate-900'/>
                </button>
                <button type='button' className='bg-white/90 blur-effect-theme button-theme px-2 py-1 p-0.5 shadow shadow-sky-200' onClick={()=>{ onAddToCart();onCartToggle();}}>{btn}</button>
            </div>
        </div>
        <div className={`flex items-center ${popular?'absolute top-5 right-2':' justify-center'} `}>
            <img src={img}
                alt={`img${id}`}
                className={`transitions-theme hover:rotate-12 ${popular?' h-auto w-64 lg:w-56 md:w-48 -rotate-[30deg]':' h-36 w-64 '} `}
            />
        </div>
    </div>
    </>
  )
}
Item.propTypes = {
    popular: PropTypes.bool,
    id:  PropTypes.string,
    title:  PropTypes.string,
    text:  PropTypes.string,
    rating:  PropTypes.string,
    btn:  PropTypes.string,
    img:  PropTypes.string,
    price:  PropTypes.string,
    color:  PropTypes.string,
    shadow:  PropTypes.string,
 
  };
export default Item