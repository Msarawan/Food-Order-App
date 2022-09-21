//import App from './App';
 import Header from './components/Layout/header/Header';
import React from "react";
import { mount } from "enzyme";

describe("Food Order app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header/>);
  });

  test("render the title of the app", () => {
    expect(wrapper.find("h1").text()).toContain("Meals");
  });
});