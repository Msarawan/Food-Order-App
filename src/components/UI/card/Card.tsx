import * as React from 'react';
import classes from './Card.module.css';


interface Props{
  children:any
}

const Card = (props:Props) => {
  return <div className={classes.card}>{props.children}</div>
};

export default Card;