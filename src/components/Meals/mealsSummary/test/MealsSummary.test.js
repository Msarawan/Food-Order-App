import React from "react";
import MealSummary from "../../mealsSummary/MealsSummary"
import { mount } from "enzyme";

describe("Food Order aap testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MealSummary/>);
  });

  test("render the title of meal summary", () => {
    expect(wrapper.find("h2").text()).toContain("Delicious Food, Delivered To You");
  });

  test("render the discription of meal", () => {
    expect(wrapper.find(".summary").text()).toContain("Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.");
  });

  test("render the discription", () => {
    expect(wrapper.find(".summary").text()).toContain("All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!")});

  test('renders a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
});