// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { selectCartState, setCloseCart,selectCartItems ,setClearCartItems, setGetTotals,selectCartAmount,selectCartQuantity} from '../app/CartSlice';

const Cart = () => {


  const dispatch = useDispatch();
  const isCartState = useSelector(selectCartState)
  const onCartToggle = () => {
      dispatch(setCloseCart({cartState:false}))
  }
  const cartItems = useSelector(selectCartItems) 
  const onClearCartItem  = () => {dispatch(setClearCartItems())}
   
  const totalAmount = useSelector(selectCartAmount)
  const totalQuantity = useSelector(selectCartQuantity)
  // update when change the values 
  useEffect(() => {
    dispatch(setGetTotals())
  
   }, [cartItems,dispatch]);
  return (
    <>
    <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[550] ${
          isCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className={`blur-effect-theme  h-screen  w-full max-w-xl absolute right-0`}>
            <CartCount onCartToggle = {onCartToggle} onClearCartItem={onClearCartItem} totalQuantity = {totalQuantity}/>
             {cartItems?.length === 0 ? <CartEmpty onCartToggle = {onCartToggle}/> : 
             <>
               <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                    {cartItems?.map((item,index)=>(
                      <CartItem key={index} item = {item}/>
                    ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button  type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
              </div>
            </div>
            </>
              } 
            
        </div>
    </div>
        
    </>
  )
}

export default Cart