"use client";
import { useContext } from "react";
import CartTop from "./CartTop";
import CartItem from "./CartItem";
import CartBottom from "./CartBottom";
import { CartContext } from "../context/CartContext";

const CartDesktop = () => {
  const { isOpen, cart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } md:flex fixed top-0 bottom-0 w-[500px] bg-white shadow-2xl flex flex-col transition-all duration-300 z-50`}
    >
      <CartTop />
      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="p-4">Cart is empty</p>
        ) : (
          cart.map((pizza, index) => <CartItem key={index} pizza={pizza} />)
        )}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartDesktop;
