import { Fragment } from "react";
import MealsItemForm from "./MealsItemForm";

const MealItem = (props) => {
  return (
    <Fragment>
      <h5>
        {props.meals.title}, Rs. {props.meals.price}-{props.meals.description}
      </h5>
      <MealsItemForm />
    </Fragment>
  );
};

export default MealItem;
