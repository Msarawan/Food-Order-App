import React from "react";
 import Modal from "../../../UI/modal/Modal"
 import { mount } from "enzyme";

 describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Modal/>);
  });

  test("render the close button", () => {
    expect(wrapper.find(".button--alt").text()).toContain("Close");
  });

  test('renders a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

 })