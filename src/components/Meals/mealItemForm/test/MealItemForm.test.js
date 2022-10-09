//import 'jsdom-global/register';
import MealItemForm from "../../mealItemForm/MealItemForm";
import React from "react";
import {mount,shallow} from "enzyme";


jest.mock('../../../UI/input/Input');

describe("Food Order app testing", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MealItemForm onSubmit='{submitHandler}' onClick='{addToCartHandler}' />);
  });

  test("renders correctly", () =>{
    wrapper=mount(<MealItemForm/>)
  })

  test("render the Add button", () => {
     expect(wrapper.find('button').text()).toContain('+ Add')})

  test("Add the items by clicking the add button", () => {
    expect(wrapper.props().onClick).toEqual('{addToCartHandler}');
      console.log(wrapper.find('MealItemForm'))
   });

  test("render sumbit handler", () => {
    expect(wrapper.props().onSubmit).toEqual('{submitHandler}');
  })

 
  test("render event preventDefault",() =>{
  const event = { preventDefault: jest.fn() };
  expect(event.preventDefault).toMatchSnapshot();
  })
  expect(wrapper).toMatchSnapshot();  


//   const setAmountIsValid = jest.fn();
//   const useStateSpy = jest.spyOn(React, 'useState');
//   useStateSpy.mockImplementation(init => [init, setAmountIsValid]);

//  expect(setAmountIsValid).toMatchSnapshot();
//   test('should update state on input change', () => {
//     const newInputValue = false;
//     wrapper.find('submitHandler').simulate('change', { target: { value: newInputValue } });
//     expect(setAmountIsValid).toHaveBeenCalledWith(newInputValue);
// });

  test('does not reload page after submition', () => { 
    const wrapper = shallow(<MealItemForm />)
    const event = { preventDefault:() => {} }
    jest.spyOn(event, 'preventDefault')
    wrapper.find('form').simulate('submit', event)
    expect(event.preventDefault).toBeCalled()
  })


})




