import Image from "next/image";
import { useContext } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartItem = ({ pizza }) => {
  const {removeItem,increaseAmount,decreaseAmount} = useContext(CartContext);
  return (
    <div className="select-none p-4 border-b border-gray-200">
      <div className="flex gap-x-4 mb-2">
        <div className="flex justify-center items-center">
          <Image src={pizza.image} width={90} height={90} alt={pizza.name} />
        </div>

        {/* Pizza Info */}
        <div className="flex-1 flex flex-col gap-y-1">
          <div className="text-lg capitalize font-bold">{pizza.name}</div>
          <div className="flex flex-col gap-y-1">
            <div className="capitalize font-medium text-[15px]">
              {pizza.crust} crust
            </div>
            <div className="capitalize mb-2 font-medium text-[15px]">
              {pizza.size} size
            </div>

            <div className="flex items-center gap-x-1">
              <div onClick={()=>decreaseAmount(pizza.id,pizza.price)} className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
                <BiMinus />
              </div>
              <div className="font-semibold flex flex-1 max-w-[30px] justify-center items-center">
                {pizza.amount}
              </div>
              <div onClick={()=>increaseAmount(pizza.id,pizza.price)} className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
                <BiPlus />
              </div>
            </div>
          </div>
        </div>

        {/* Remove + Price */}
        <div className="flex flex-col justify-between">
          <div onClick={()=>removeItem(pizza.id,pizza.crust,pizza.price, pizza.size,
    pizza.additionalTopping)} className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange">
            <IoCloseOutline />
          </div>
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed">
              ${parseFloat(pizza.price * pizza.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Toppings */}
      <div className="flex flex-wrap items-center gap-3 p-6 border-b border-black/10">
  <span className="font-semibold">Toppings:</span>
  {pizza.additionalTopping?.length > 0 ? (
    pizza.additionalTopping.map((topping, index) => (
      <div
        className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none"
        key={index}
      >
        {topping.name}
      </div>
    ))
  ) : (
    <span>None</span>
  )}
</div>


    </div>
  );
};

export default CartItem;
