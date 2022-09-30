// { useContext } from 'react';
import Modal from '../../UI/modal/Modal';
import CartItem from '../cartItem/CartItem';
import classes from './Cart.module.css';
//import CartContext from '../../../store/CartContext';
import { CartCtx } from '../../../store/CartContext';

const Cart = (props) => {
  //const cartCtx = useContext(CartContext);
  const cartCtx = CartCtx();
  const totalAmount = `$${cartCtx.totalAmount?.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
};
   
 console.log(cartCtx.items);

const cartItems = (
    <ul className={classes['cart-items']}>
 {cartCtx.items?.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
</ul>
);

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}  onClick={props.onClose}>
            Close
        </button>
        {(cartCtx.items?.length > 0) && <button className={classes.button}>Order</button>}
      </div>
      {/* {console.log("amount", cartCtx.items)} */}
    </Modal>
  );
};

export default Cart;