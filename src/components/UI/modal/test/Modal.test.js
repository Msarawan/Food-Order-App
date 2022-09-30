import React from "react";
 import Modal from "../../modal/Modal"
 import { createPortal } from "react-dom";
 import { mount} from "enzyme";
 import ReactDOM from 'react-dom';
import {
 Backdrop,
   ModalOverlay,
 } from '../../modal/Modal';
 

 describe('Modal component', () => {
  let wrapper;

    const modalRoot = global.document.createElement('div');
     modalRoot.setAttribute('id', 'overlays');
     const body = global.document.querySelector('body');
     body.appendChild(modalRoot);

    test('should render the modal wrapper', () => {
      wrapper = mount(
        <Modal/>
     );   
       expect(modalRoot.hasChildNodes()).toBeFalsy();
       expect(wrapper.find("Backdrop").exists()).toBeTruthy();
       expect(wrapper.find("ModalOverlay").exists()).toBeTruthy();

       expect(wrapper).toMatchSnapshot();
      })
    })
