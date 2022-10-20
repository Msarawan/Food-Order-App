import * as React from 'react';
import classes from './CartItem.module.css';
//import React, {cartItemRemoveHandler} from 'react';


interface ICartItemProps {
 price : string,
 name : string,
 amount : number,
 onRemove :()=> void,
 onAdd:()=> void
}


const CartItem :React.FC<ICartItemProps>= ({price:mealPrice,name,amount,onRemove,onAdd}) => {
const price = mealPrice;
console.log(mealPrice)

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
      <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;