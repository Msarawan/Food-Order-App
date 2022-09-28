 import React from 'react';
 import { shallow } from 'enzyme';
 import  CartContext from '../../../../store/cart-context';
 import Cart from "../../cartModule/Cart";

describe('mock the component', () => {
  test('it should mock the context', () => {
    const contextValues = { 
      items : 4,
      addItem: (item) => {},
      removeItem: (id) => {}
    };

    jest
      .spyOn(CartContext, 'cartCtx')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Cart/>);
     console.log(wrapper.find('Cart'))
  });
});

