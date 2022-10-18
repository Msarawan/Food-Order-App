import * as React from 'react';
import { Fragment } from 'react';

import HeaderCartButton from '../headerCartButton/HeaderCartButton';
import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';

interface IHeaderProps{
  onShowCart:()=>void
}


const Header: React.FC<IHeaderProps> = ({onShowCart}) => {
 return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton  onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;