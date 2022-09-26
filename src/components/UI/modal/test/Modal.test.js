import React from "react";
 import Modal from "../../modal/Modal"
 import { mount } from "enzyme";

//  import {
//   // Backdrop,
//   ModalOverlay,
// } from '../../modal/Modal';
 

//  describe('Modal component', () => {
//   let component;

//    const modalRoot = global.document.createElement('div');
//     modalRoot.setAttribute('id', 'overlays');
//     const body = global.document.querySelector('body');
//     body.appendChild(modalRoot);

//     // afterEach(() => {
//     //   component.unmount();
//     // });

//     test('should render the modal component', () => {
//       component = mount(
//         <Modal/>
//       );
//       expect(modalRoot.hasChildNodes()).toBeTruthy();


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