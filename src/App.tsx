import * as React from 'react';
import { useState } from 'react';
import Header from './components/Layout/header/Header';
import Meals from './components/Meals/meal/Meals';
import Cart from './components/Cart/cartModule/Cart';
import CartProvider from './store/CartProvider';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main> 
   </CartProvider>
  );
}

export default App;