import React from "react";
import { removeFromCard } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardComp = ({ card }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCard(card?.id));
    toast.error("Ürün sepetten silindi!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="my-10 flex items-center justify-between">
      <img src={card?.image} className="w-[150px] h-[150px] object-cover" />
      <div className="w-[476px]">
        <div className="text-xl">{card?.title}</div>
        <div>{card?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {card?.price} TL ({card?.quantity})
      </div>
      <div
        onClick={handleRemove}
        className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CardComp;
