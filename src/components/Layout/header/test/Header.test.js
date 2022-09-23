import Header from '../../header/Header';
import React from "react";
import { mount } from "enzyme";

describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header onClick='{showCartHandler}'/>);
  });

  test("render the title of the app", () => {
    expect(wrapper.find("h1").text()).toContain("Meals");
  });

  test("render the initial value of state in the cart", () => {
    expect(wrapper.props().onClick).toEqual('{showCartHandler}');
    console.log(wrapper.find('Header').props())
  });

  test('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});