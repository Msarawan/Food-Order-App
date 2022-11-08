import * as React from 'react';
import { useState } from 'react';
import Input from '../../UI/input/Input';
import classes from './MealItemForm.module.css';


interface IMealItemFormProps{
  onAddToCart(enteredAmountNumber: number): unknown,
  id: string
}

const MealItemForm: React.FC<IMealItemFormProps> = ({onAddToCart,id})=> {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const submitHandler = (event:any) => {
    event.preventDefault();

   // const enteredAmount = amountInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    
  if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };


  return (
    <form className={classes.form}  onSubmit={submitHandler}>
      <Input
       ref={amountInputRef}
        label ='Amount'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>      
  );
};

export default MealItemForm;