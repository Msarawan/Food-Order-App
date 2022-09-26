import React from 'react';
import {shallow} from "enzyme" ;
import CartItem from "../../cartItem/CartItem";


describe("Food Order app testing", () => {
 test("render the Test to check button is working", () => {
    const onRemove = jest.fn();
    const wrapper = shallow(<CartItem  mockFn={onRemove} />);
    wrapper.find("button").simulate("click");
    expect(onRemove).toHaveBeenCalled();
 })
})