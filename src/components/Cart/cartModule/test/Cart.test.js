 import React from 'react';
 import {shallow} from 'enzyme';
 import   * as CartContext from '../../../../store/CartContext';
 import Cart from "../../cartModule/Cart";

jest.mock('../../cartItem/CartItem');
jest.mock('../../../UI/modal/Modal');


 describe('mock the component', () => {
 let wrapper;
 test('it should mock the context', () => {
     
  const cartCtx = {
     items:[{
       id : 1,
       amount:4,
       name:'aloo kulcha',
       price: 18.48,  
    }],
    addItem: jest.fn(),
    removeItem: jest.fn(),
    totalAmount: 18.45,
   }
   jest
      .spyOn(CartContext, 'CartCtx')
      .mockImplementation(() =>(cartCtx));
       wrapper = shallow(<Cart/>);
       console.log(wrapper.debug());
       //console.log(cartCtx.items);
  
    expect(wrapper).toMatchSnapshot(); 


});
  
});
