//import 'jsdom-global/register';
import Card from "../Card";
//import AvailableMeals from "../../../Meals/availableMeal/AvailableMeals";
import React from "react";
//import Adapter from 'enzyme-adapter-react-16';
import { mount} from "enzyme";

describe("Food Order app testing", () => {
  let wrapper;
  test("render the childrens of the props", () => {
    const mealsList = 
      [
        {
          id: 'm1',
          name: 'Aloo Kulcha',
          description: 'Whole wheat flour, potatoes,garam masala',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Veg Fried Rice',
          description: 'Matar, basmati rice, cabbage, soy sauce, beans',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Chicken Sizzler',
          description: 'Sizzler, skinless chicken breasts, cherry tomatoes',
          price: 18.99,
        },
      ];

      
      wrapper = mount(<Card item ={mealsList}/>);
      expect(wrapper).toMatchSnapshot();
      expect(mealsList).toHaveLength(4);
     console.log(wrapper.find('Card'))
  });
})


