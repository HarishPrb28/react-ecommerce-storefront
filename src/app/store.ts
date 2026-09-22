import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
interface CartItem { id:number; quantity:number; }
const cartSlice = createSlice({name:'cart',initialState:{items:[] as CartItem[]},reducers:{addToCart:(s,a:PayloadAction<number>)=>{const i=s.items.find(x=>x.id===a.payload); i?i.quantity++:s.items.push({id:a.payload,quantity:1});},removeFromCart:(s,a:PayloadAction<number>)=>{s.items=s.items.filter(x=>x.id!==a.payload)},updateQuantity:(s,a:PayloadAction<{id:number;quantity:number}>)=>{const i=s.items.find(x=>x.id===a.payload.id);if(i)i.quantity=Math.max(1,a.payload.quantity)},clearCart:s=>{s.items=[]}}});
export const {addToCart,removeFromCart,updateQuantity,clearCart}=cartSlice.actions;
export const store=configureStore({reducer:{cart:cartSlice.reducer}});
export type RootState=ReturnType<typeof store.getState>; export type AppDispatch=typeof store.dispatch;
