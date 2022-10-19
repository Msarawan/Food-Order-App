import * as React from 'react';
import { useContext } from 'react';
import MealItemForm from '../mealItemForm/MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/CartContext';


interface IMealItemProps{
id:string,
name:string,
price:number,
description:string
}
const MealItem: React.FC<IMealItemProps> = ({id,name,price:mealPrice,description}) => {
  const cartCtx = useContext(CartContext);

  const price = mealPrice.toFixed(2);
  console.log(price)

  const addToCartHandler = (amount:any) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
 

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemForm id={id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;