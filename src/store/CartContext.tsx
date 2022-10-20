import React, { useContext } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item:any) => {},
  removeItem: (id:String) => {}
});

export const CartCtx = () => useContext(CartContext);
export default CartContext;