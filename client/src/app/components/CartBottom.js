"use client";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import CheckoutDetails from "./CheckoutDetails";
import { CartContext } from "../context/CartContext";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

Modal.setAppElement("body");

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useContext(CartContext);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      {cart.length > 0 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto ">
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>${parseFloat(cartTotal).toFixed(2)}</div>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              openModal();
            }}
            className="btn btn-lg gradient font-semibold flex justify-center w-full"
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="p-4 text-center text-gray-500 font-semibold">
            Your cart is empty
          </div>
        </div>
      )}

      {modal && (
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Checkout Modal"
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          <div
            onClick={closeModal}
            className="absolute right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>

          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </>
  );
};

export default CartBottom;




