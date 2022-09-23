 import React from "react";
 import Cart from "../../cartModule/Cart"
 import { mount } from "enzyme";

 describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Cart onClick='{hideCartHandler}'/>);
  });

  test("render the initial value of state in the cart", () => {
     expect(wrapper.props().onClick).toEqual('{hideCartHandler}');
    console.log(wrapper.find('Cart').props())
   });


 })