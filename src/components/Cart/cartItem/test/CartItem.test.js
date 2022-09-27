import React from 'react';
import CartItem from "../../cartItem/CartItem";
import {shallow} from "enzyme";

describe("Food Order app testing", () => {
 test("render onclick function on remove button", () => {
    const onRemove = jest.fn();
    const wrapper = shallow(<CartItem  mockFn={onRemove} />);
    wrapper.find("button").simulate("click");
    //expect(onRemove).toHaveBeenCalled();
 })

 test("render onclick function on add button", () => {
   const onAdd = jest.fn();
   const wrapper = shallow(<CartItem  mockFn={onAdd} />);
   wrapper.find("button").simulate("click");
  // expect(onAdd).toHaveBeenCalled();
})
})