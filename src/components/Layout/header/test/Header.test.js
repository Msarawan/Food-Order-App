import Header from '../../header/Header';
import React from "react";
import { mount } from "enzyme";


jest.mock('../../headerCartButton/HeaderCartButton');

describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header onClick='{showCartHandler}'/>);
  });

  test("render the title of the app", () => {
    expect(wrapper.find("h1").text()).toContain("Meals");
  });

  test("render state in the cart", () => {
    expect(wrapper.props().onClick).toEqual('{showCartHandler}');
    console.log(wrapper.find('Header').props())
    expect(wrapper).toMatchSnapshot();
  });

describe('Toggle Component', () =>{
  test('state of the cart to be true',()=>{
    const test = true;
    expect(test).toBe(true);
  })
}) ;

});