import Card from "../../card/Card";
import React from "react";
import { mount } from "enzyme";

describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Card/>);
  });

  test("render the childrens of the props", () => {
    //expect(wrapper.find("ul")).toContain("{mealsList}");
    console.log(wrapper.find('Card'))
  });

  test('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})