import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      console.log(action.payload);
        let found=false;
      state.cart=state.cart.map((elem)=>{
        if(elem.id==action.payload.id){
            elem.quantity+=1;
            found=true;
            return elem;
        }
        else{
            return elem;
        }
      })
      if(!found) state.cart.push(action.payload);
    },
    DeleteFromCart: (state, action) => {
        console.log(action.payload);
        state.cart=state.cart.filter((elem)=>elem.id!=action.payload)
      },
    increaseQunatity:(state,action) => {
        state.cart=state.cart.filter((elem)=>{
            if(elem.id!=action.payload) return elem;
            else{
                elem.quantity+=1;
                return elem;
            }
        })
    },
    decreaseQunatity:(state,action) => {
        state.cart=state.cart.filter((elem)=>{
            if(elem.id!=action.payload) return elem;
            else{
                elem.quantity-=1;
                return elem;
            }
        })
    }
  },
});

export const { AddToCart,DeleteFromCart,increaseQunatity, decreaseQunatity } = cartSlice.actions; // Correct way to access actions
export default cartSlice.reducer; // Correct way to export the reducer
