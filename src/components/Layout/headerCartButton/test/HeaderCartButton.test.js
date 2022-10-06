import 'jsdom-global/register';
import React from 'react';
import HeaderCartButton from "../../headerCartButton/HeaderCartButton";
//import Adapter from 'enzyme-adapter-react-16';
import {mount,shallow} from "enzyme";

describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
   wrapper = mount(<HeaderCartButton/>);
  });

  test("render the cart name", () => {
    expect(wrapper.find(".name").text()).toContain("Your Cart");
  });

  expect(wrapper).toMatchSnapshot();
 
})

describe('render a button on onclick event' , () =>{
  const showCartHandler = jest.fn();
  const  wrapper = shallow(<HeaderCartButton onClick = {showCartHandler}/>)

  const element = wrapper.find('button').first();
  //const fn = jest.fn()
  element.simulate('click')
  expect(showCartHandler).toHaveBeenCalledTimes(1)
  //console.log(showCartHandler);
 expect(wrapper).toMatchSnapshot();
})