import * as React from 'react';
import classes from './Card.module.css';


interface ICardProps{
  children:any
}

const Card: React.FC<ICardProps> = ({children}) => {
  return <div className={classes.card}>{children}</div>
};

export default Card;