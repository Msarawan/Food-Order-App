import React from "react";
import { mount } from "enzyme";
import MealItem from "../../MealItem/MealItem"

 describe("Food Order app testing", () => {
 let wrapper;
 let item;
  beforeEach(() => {
    wrapper = mount(<MealItem item= {item}/>);
  });

  test("render the meal items", () => {
    item = [{
        id: 'm1',
        name: 'Aloo Kulcha',
        description: 'Whole wheat flour, potatoes,garam masala',
        price: 22.99,
      }]
   // const mealItem = Screen.getTestById(".meals");
     //expect(wrapper.mealItem.toHaveTextContent('Aloo Kulcha')
   console.log(wrapper.find('MealItem').props())
   })
})
