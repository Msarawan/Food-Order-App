import * as React from 'react';
import { Fragment} from 'react';
import classes from './Modal.module.css';

interface IModalProps {
 onClose:()=>void,
 children: React.ReactNode,
}

interface IBackdropProps{
  onClose:()=>void
}

interface IModalOverlayProps{
  children: React.ReactNode,
}


const Backdrop:React.FC<IBackdropProps>=({onClose}) =>{
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay:React.FC<IModalOverlayProps> = ({children}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};


const portalElement = document.getElementById('overlays');
const modalElement = document.createElement('div');

  // appends the modal to portal once modal's children are mounted and 
  
const Modal:React.FC<IModalProps> = ({onClose,children}) => {
  return (
    <Fragment>
      {<div>ReactDOM.createPortal(<Backdrop onClose={function (): void {
        throw new Error('Function not implemented.');
      } }/>, portalElement)</div>}
      
     {<div>ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,portalElement )</div>}
   </Fragment>
  );
};

export default Modal;