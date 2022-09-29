 import React from 'react';
 import { shallow } from 'enzyme';
 import   * as CartContext from '../../../../store/CartContext';
 import Cart from "../../cartModule/Cart";

describe('mock the component', () => {
  let wrapper;
  test('it should mock the context', () => {
     
    const contextValues = {
     items:2,
     price:17.47,
      addItem: (item) => jest.fn(),
      removeItem: (id) => jest.fn()
    }

    jest
      .spyOn(CartContext, 'CartCtx')
      .mockImplementation(() =>((contextValues)));
       wrapper = shallow(<Cart/>);
       console.log(wrapper.find('Cart'))
    // console.log(contextValues.price)

  })

  test('renders a snapshot', () => { 
     expect(wrapper).toMatchSnapshot();
   });
});

