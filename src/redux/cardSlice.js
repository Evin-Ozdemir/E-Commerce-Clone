import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let card = localStorage.getItem("card");
  return card ? JSON.parse(card) : [];
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("card", JSON.stringify(data));
};

const initialState = {
  cards: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isItemCard = state.cards.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCard) {
        // Eğer ürün zaten varsa miktarını artır
        const tempCard = state.cards.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          }
          return item;
        });
        state.cards = tempCard;
      } else {
        // Eğer ürün yoksa sepete ekle
        state.cards.push({
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        });
      }
      storeInLocalStorage(state.cards);
      state.itemCount += action.payload.quantity; // Sepetteki ürün sayısını artır
    },

    removeFromCard: (state, action) => {
      const tempCard = state.cards.filter((item) => item.id !== action.payload);
      state.cards = tempCard;
      state.itemCount = state.cards.reduce(
        (total, item) => total + item.quantity,
        0
      );
      storeInLocalStorage(state.cards);
    },

    clearCard: (state) => {
      state.cards = [];
      state.itemCount = 0;
      state.totalAmount = 0;
      storeInLocalStorage(state.cards);
    },

    getCardTotal: (state) => {
      state.totalAmount = state.cards.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.itemCount = state.cards.reduce(
        (total, item) => total + item.quantity,
        0
      ); // Tüm ürün adetlerini topla
    },
  },
});

export const { addToCard, removeFromCard, clearCard, getCardTotal } =
  cardSlice.actions;
export default cardSlice.reducer;
