"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust
  ) => {
    console.log(id, image, name, price, additionalTopping, size, crust);
    //sort additionalTopping array by name
    additionalTopping.sort((a,b)=>a.name.localeCompare(b.name))

    const newItem = {
        id,image,name,price,additionalTopping,size,crust,amout:1
    }
    console.log(newItem)
  };
  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, addToCart, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
