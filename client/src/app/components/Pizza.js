"use client";
import Image from "next/image";
import Modal from "react-modal";
import PizzaDetails from "./PizzaDetails";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

// blind modal to body
Modal.setAppElement("body");
const modalStyle = {
  overlay: {
    background: "rgba(0,0,0,0.5)",
  

  },
};
const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group mx-5 py-2 xl:py-4 xl:px-2 rounded-xl">
      <Image
        className="lg:group-hover:translate-y-3 transiton-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={1}
      ></Image>
      {/* title */}
      <div>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[20px] mb-6 text-gray-500 line-clamp-5 lg:line-clamp-4">
        {pizza.description}
      </div>
      {/* price & button */}
      <div className="mb-6 flex items-center justify-between ">
        {/* price hidden sm and visible lg */}
        <div
          className="hidden lg:flex text-xl font-semibold"
          onClick={openModal}
        >
          Start at {pizza.priceSm}
        </div>
        {/* Show on mobile only */}
        <button
          onClick={openModal}
          className="flex lg:hidden btn btn-sm gradient text-sm text-black p-3"
        >
          {pizza.priceSm}
        </button>

        {/* Show on desktop only */}
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>

        {/* { Modal} */}
        {modal && (
          <Modal
            isOpen={modal}
            style={modalStyle}
            onRequestClose={closeModal}
            contentLabel="Pizza Modal"
            className="w-full h-full bg-white lg:max-w-[850px] lg:max-h-[650px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
          >
           <div  onClick={closeModal} className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer">
            <IoCloseOutline className="text-4xl text-orange"  onClick={closeModal}/>
           </div>
           <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}/>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Pizza;
