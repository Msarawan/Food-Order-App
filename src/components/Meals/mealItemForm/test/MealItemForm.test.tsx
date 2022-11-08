import MealItemForm from "../MealItemForm";
import React from "react";
import {mount} from "enzyme";


jest.mock('../../../UI/input/Input');

describe("Food Order app testing", () => {
  
  let wrapper:any;
  beforeEach(() => {
    wrapper = mount(<MealItemForm onAddToCart={function (enteredAmountNumber: number): unknown {
      throw new Error("Function not implemented.");
    } } id={""} />);
  });

 test("renders correctly", () =>{
    wrapper=mount(<MealItemForm onAddToCart={function (enteredAmountNumber: number): unknown {
      throw new Error("Function not implemented.");
    } } id={""}/>)})
     

  test("render the Add button", () => {
     expect(wrapper.find('button').text()).toContain('+ Add')})

  test('does not reload page after submition', () => { 
  jest.spyOn(React, 'useRef').mockReturnValueOnce({current:{value:'2'}});
  const props = {onAddToCart:jest.fn()}
  wrapper = mount(<MealItemForm id={""} {...props}/>);
  expect(wrapper).toMatchSnapshot();


 const event = { preventDefault:() => {} }
  jest.spyOn(event, 'preventDefault')
  wrapper.find('form').simulate('submit', event)
  expect(event.preventDefault).toBeCalled()
  })

})




