import React,{ Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


const portalElement = document.getElementById('overlays');
const modalElement = document.createElement('div');

  // appends the modal to portal once modal's children are mounted and 
  // removes it once we don't need it in the DOM anymore:
 
const Modal = (props) => {
 /*  useEffect(() => {
    portalElement.appendChild(modalElement);
    return () => {
      portalElement.removeChild(modalElement);
    };
  }, [modalElement]); */
  return (
    <Fragment>
      {<div>ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)</div>}
      
     {<div>ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,portalElement )</div>}
       
    </Fragment>
  );
};

export default Modal;