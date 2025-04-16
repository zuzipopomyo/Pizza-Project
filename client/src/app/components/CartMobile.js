'use client'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartTop from './CartTop'
import CartBottom from "./CartBottom";

const CartMobile = () => {
  const {isOpen} = useContext(CartContext);
  return <div className={`${
    isOpen ? 'bottom-0' : '-bottom-full'
  } bg-green-400 fixed w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}>
    <CartTop/>
    {/* cart items */}
    <div>cart items</div>
    {/* cart bottom */}
    <CartBottom/>
  </div>;
};

export default CartMobile;
