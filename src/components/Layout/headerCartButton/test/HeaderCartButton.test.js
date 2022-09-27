import React from 'react';
import HeaderCartButton from "../../headerCartButton/HeaderCartButton";
import {mount} from "enzyme";

describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
   wrapper = mount(<HeaderCartButton />);
  });

  test("render the cart name", () => {
    expect(wrapper.find(".name").text()).toContain("Your Cart");
  });

  test('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})