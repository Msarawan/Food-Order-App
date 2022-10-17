import * as React from 'react';
import { Fragment} from 'react';
import classes from './Modal.module.css';

interface Props {
 onClose:any,
 children:any
}

const Backdrop = (props:Props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props:Props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


const portalElement = document.getElementById('overlays');
const modalElement = document.createElement('div');

  // appends the modal to portal once modal's children are mounted and 
  
const Modal = (props: { children: any; }) => {
  return (
    <Fragment>
      {<div>ReactDOM.createPortal(<Backdrop onClose={undefined} children={undefined}/>, portalElement)</div>}
      
     {<div>ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,portalElement )</div>}
       
    </Fragment>
  );
};

export default Modal;