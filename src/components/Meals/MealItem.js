import { Fragment } from "react";

const MealItem = (props) => {
  return (
    <Fragment>
      <h5>
        {props.meals.title}, Rs. {props.meals.price}-{props.meals.description}
      </h5>
    </Fragment>
  );
};

export default MealItem;
