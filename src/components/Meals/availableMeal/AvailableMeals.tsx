import * as React from 'react';
import Card from '../../UI/card/Card'
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Aloo Kulcha',
    description: 'Whole wheat flour, potatoes,garam masala',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Veg Fried Rice',
    description: 'Matar, basmati rice, cabbage, soy sauce, beans',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Chicken Sizzler',
    description: 'Sizzler, skinless chicken breasts, cherry tomatoes',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem
  key={meal.id}
  id={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}
 />
  ));

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;