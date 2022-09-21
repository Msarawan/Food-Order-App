import { Fragment } from 'react';

import MealsSummary from '../mealsSummary/MealsSummary';
import AvailableMeals from '../availableMeal/AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;