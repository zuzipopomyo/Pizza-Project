// import { useState, useEffect, useContext } from "react";
// import Image from "next/image";
// import SizeSelection from "./SizeSelection";
// import CrustSelection from "./CrustSelection";
// import Topping from "./Topping";
// import { CartContext } from "../context/CartContext";

// const PizzaDetails = ({ pizza ,setModal }) => {
//   const [size, setSize] = useState("small");
//   const [crust, setCrust] = useState("traditional");
//   const [additionalTopping, setAdditionalTopping] = useState([]);
//   const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
//   const [price, setPrice] = useState(0);

//   const { addToCart} = useContext(CartContext);
//   console.log(additionalTopping);
//   // Update price when size or toppings change
//   useEffect(() => {
//     const basePrice =
//       size === "small"
//         ? pizza.priceSm
//         : size === "medium"
//         ? pizza.priceMd
//         : size === "large"
//         ? pizza.priceLg
//         : 0;

//     const totalPrice = parseFloat(basePrice + additionalToppingPrice).toFixed(
//       2
//     );
//     setPrice(totalPrice);
//   }, [size, additionalToppingPrice, pizza]);

//   // Calculate additional topping price
//   useEffect(() => {
//     if (additionalTopping.length > 0) {
//       const toppingPrice = additionalTopping.reduce((a, c) => a + c.price, 0);
//       setAdditionalToppingPrice(toppingPrice);
//     } else {
//       setAdditionalToppingPrice(0);
//     }
//   }, [additionalTopping]);

//   return (
//     <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
//       {/* Pizza Image */}
//       <div className="lg:flex-1 flex justify-center items-center">
//         <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
//           <Image
//             width={450}
//             height={450}
//             src={pizza.image}
//             alt={pizza.name}
//             priority={1}
//             className="mx-auto relative"
//           />
//         </div>
//       </div>

//       {/* Pizza Details */}
//       <div className="flex flex-col flex-1">
//         {/* Scrollable content */}
//         <div className="flex-1 p-2 text-center lg:text-left overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-gray-300 pr-2">
//           {/* Pizza Name & Size */}
//           <div className="font-semibold">
//             <h2 className="mb-1 capitalize text-3xl">{pizza.name}</h2>
//             <div className="mb-6 text-lg font-medium">
//               <span>
//                 {size === "small"
//                   ? "25cm"
//                   : size === "medium"
//                   ? "30cm"
//                   : size === "large"
//                   ? "35cm"
//                   : null}
//               </span>
//               <span>, {crust} crust</span>
//             </div>
//           </div>

//           {/* Size Selection */}
//           <SizeSelection pizza={pizza} size={size} setSize={setSize} />

//           {/* Crust Selection */}
//           <CrustSelection crust={crust} setCrust={setCrust} />

//           {/* Toppings */}
//           <div className="mt-4 text-xl font-medium">Choose Topping</div>
//           <div className=" flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
//             {pizza.toppings?.map((topping, index) => (
//               <Topping
//                 key={index}
//                 topping={topping}
//                 additionalTopping={additionalTopping}
//                 setAdditionalTopping={setAdditionalTopping}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Add to Cart Button */}
//         <div className="px-2 py-4 border-t border-gray-200 ">
//           <button
//             onClick={() =>
//             {
//               addToCart(
//                 pizza.id,
//                 pizza.image,
//                 pizza.name,
//                 price,
//                 additionalTopping,
//                 size,
//                 crust
//               ),
//               setModal(false)
//             }
//             }
//             className="btn btn-lg gradient w-full flex justify-center items-center gap-x-2"
//           >
//             <div>Add To Cart</div>
//             <div>${price}</div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PizzaDetails;
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import Topping from "./Topping";
import { CartContext } from "../context/CartContext";

const PizzaDetails = ({ pizza, setModal }) => {
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("traditional");
  const [additionalTopping, setAdditionalTopping] = useState([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const basePrice =
      size === "small"
        ? pizza.priceSm
        : size === "medium"
        ? pizza.priceMd
        : size === "large"
        ? pizza.priceLg
        : 0;

    const totalPrice = parseFloat(basePrice + additionalToppingPrice).toFixed(2);
    setPrice(totalPrice);
  }, [size, additionalToppingPrice, pizza]);

  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((acc, item) => acc + item.price, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8 overflow-y-auto">
      {/* Pizza Image */}
      <div className="lg:flex-1 flex justify-center items-center">
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            width={450}
            height={450}
            src={pizza.image}
            alt={pizza.name}
            priority={1}
            className="mx-auto relative"
          />
        </div>
      </div>

      {/* Pizza Details */}
      <div className="flex flex-col flex-1">
        {/* Scrollable content */}
        <div className="flex-1 p-2 text-center lg:text-left overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-gray-300 pr-2">
          <div className="font-semibold">
            <h2 className="mb-1 capitalize text-3xl">{pizza.name}</h2>
            <div className="mb-6 text-lg font-medium">
              <span>
                {size === "small" ? "25cm" : size === "medium" ? "30cm" : size === "large" ? "35cm" : null}
              </span>
              <span>, {crust} crust</span>
            </div>
          </div>

          {/* Size Selection */}
          <SizeSelection pizza={pizza} size={size} setSize={setSize} />

          {/* Crust Selection */}
          <CrustSelection crust={crust} setCrust={setCrust} />

          {/* Toppings */}
          <div className="mt-4 text-xl font-medium">Choose Topping</div>
          <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
            {pizza.toppings?.map((topping, index) => (
              <Topping
                key={index}
                topping={topping}
                additionalTopping={additionalTopping}
                setAdditionalTopping={setAdditionalTopping}
              />
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="px-2 py-4 border-t border-gray-200 bg-white">
          <button
            onClick={() => {
              addToCart(
                pizza.id,
                pizza.image,
                pizza.name,
                price,
                additionalTopping,
                size,
                crust
              );
              setModal(false);
            }}
            className="btn btn-lg gradient w-full flex justify-center items-center gap-x-2"
          >
            <div>Add To Cart</div>
            <div>${price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;

