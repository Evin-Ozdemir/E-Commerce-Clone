import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCardTotal } from "../redux/cardSlice";
import CardComp from "../components/card/CardComp";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cards, itemCount, totalAmount } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);
  return (
    <div>
      {cards?.length > 0 ? (
        <div>
          {cards?.map((card, i) => (
            <CardComp key={i} card={card} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            TOPLAM TUTAR:
            <span className="font-bold text-3xl ml-2">
              {totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center my-96">
          Eklenmiş ürün bulunmamaktadır...
        </div>
      )}
    </div>
  );
};

export default Card;
