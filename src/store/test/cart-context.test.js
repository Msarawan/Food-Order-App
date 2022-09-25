import React from "react";
 import CartContext from "../cart-context";
 import { mount } from "enzyme";


describe("Food Order app testing", () => {
 let wrapper;

 test("render the cart-context", () => {
  wrapper = mount(
    <CartContext.Provider  value = {{items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    }}
  />)
  // expect(wrapper.find()).toEqual('{items}');
   console.log(wrapper.find(CartContext))
 })

   test('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})