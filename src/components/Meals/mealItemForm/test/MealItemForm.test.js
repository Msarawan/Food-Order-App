import MealItemForm from "../../mealItemForm/MealItemForm"
import React from "react";
import {mount} from "enzyme";


describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MealItemForm onSubmit='{submitHandler}' onClick='{addToCartHandler}'/>);
  });

  test("render the Add button", () => {
     expect(wrapper.find('button').text()).toContain('+ Add');})

  test("add the quantity by clicking add button", () => {
    expect(wrapper.props().onClick).toEqual('{addToCartHandler}');
      console.log(wrapper.find('MealItemForm'))
   });

  test("render sumbit handler", () => {
    expect(wrapper.props().onSubmit).toEqual('{submitHandler}');
  });

  test('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
})