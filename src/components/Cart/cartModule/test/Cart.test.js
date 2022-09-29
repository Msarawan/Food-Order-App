 import React from 'react';
 import {shallow} from 'enzyme';
 import   * as CartContext from '../../../../store/CartContext';
 import Cart from "../../cartModule/Cart";

describe('mock the component', () => {
  let wrapper;
  test('it should mock the context', () => {
     
    const contextValues = {
  //    items:[{
  //      id : 1,
  //      amount:10,
  //      name:'aloo kulcha',
  //      price: 18.48,  
  //   }],
  //   addItem: jest.fn(),
  //   removeItem: jest.fn(),
  //   totalAmount: 18.45,
  }

    jest
      .spyOn(CartContext, 'CartCtx')
      .mockImplementation(() =>(contextValues));
       wrapper = shallow(<Cart/>);

       console.log(wrapper.debug());
       console.log(contextValues.items)
     })

  test('renders a snapshot', () => { 
     expect(wrapper).toMatchSnapshot();
   });
});

