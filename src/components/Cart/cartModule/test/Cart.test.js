import React from 'react';
//import CartItem from "../../cartItem/CartItem";
import ShallowRenderer from 'react-test-renderer/shallow';
import Cart from '../../cartModule/Cart';
import {CartContext} from '../../../store/cart-context';


const CartContextProvider = ({ children }) => (
    <CartContext.Provider>{children}</CartContext.Provider>
  );
  
  const wrapper = ({ children }) => (
    <CartContextProvider>{children}</CartContextProvider>
  );

  let resultItem = [];

   const mockSetExpenses = jest.fn().mockImplementation(item => {
     resultItem = [...item];

     return resultItem;
  });

const mockUseContext = jest.fn().mockImplementation(() => ({
    items: [],
  setItem: mockSetExpenses,
}));

React.useContext = mockUseContext;

describe('useExpenses', () => {
    it('should add expense', () => {
       ShallowRenderer(() => Cart(), { wrapper });
  
    //   expect(resultItem).toHaveLength(0);
  
    //   expect(mockSetExpenses).toHaveBeenCalled();
    //   expect(resultItem).toHaveLength(1);
        console.log((wrapper.find('Cart')));
    });
  });