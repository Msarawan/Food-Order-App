import React from "react";
import Modal from "../Modal";
import { mount} from "enzyme";
import ReactDOM from 'react-dom';
//import { Backdrop,  ModalOverlay,} from '../Modal';
 

 describe('Modal component', () => {
  let wrapper:any;

    const modalRoot = global.document.createElement('div');
     modalRoot.setAttribute('id', 'overlays');
     const body = global.document.querySelector('body');
     body?.appendChild(modalRoot);

    test('should render the modal wrapper', () => {
      wrapper = mount(
        <Modal onClose={function (): void {
          throw new Error("Function not implemented.");
        } } children={undefined}/>
     );   
       expect(modalRoot.hasChildNodes()).toBeFalsy();
       expect(wrapper.find("Backdrop").exists()).toBeTruthy();
       expect(wrapper.find("ModalOverlay").exists()).toBeTruthy();

       expect(wrapper).toMatchSnapshot();
      })
    })
