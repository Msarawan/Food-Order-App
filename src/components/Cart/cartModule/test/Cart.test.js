 import React from 'react';
 import {shallow} from 'enzyme';
 import   * as CartContext from '../../../../store/CartContext';
 import Cart from "../../cartModule/Cart";
//import HeaderCartButton from '../../../Layout/headerCartButton/HeaderCartButton';


describe('mock the component', () => {
  let wrapper;
  test('it should mock the context', () => {
     
  const contextValues = {
     items:[{
       id : 1,
       amount:4,
       name:'aloo kulcha',
       price: 18.48,  
    }],
    addItem: jest.fn(()=>5),
    removeItem: jest.fn(),
    totalAmount: 18.45,
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




//   describe('render a button on onclick event' , () =>{
//      const showCartHandler = jest.fn();
//      const  wrapper = shallow(<HeaderCartButton onClick = {showCartHandler}/>)

//      const element = wrapper.find('button').first();
//      //const fn = jest.fn()
//      element.simulate('click')
//      expect(showCartHandler).toHaveBeenCalledTimes(1)
//      console.log(showCartHandler);
//   })
