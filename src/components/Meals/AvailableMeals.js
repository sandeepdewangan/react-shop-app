import { Fragment } from "react";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "1",
    title: "Farah",
    description: "A delicious dish made with rice floor.",
    price: 30.0,
  },
  {
    id: "2",
    title: "Patal Ke Chatni",
    description: "A delicious dish made with tomato.",
    price: 25.5,
  },
  {
    id: "3",
    title: "Basi",
    description: "A delicious dish made with rice soacking overnight.",
    price: 22.5,
  },
];
const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((m) => (
    <h3>
      <li key={m.id}>
        <MealItem meals={m} />
      </li>
    </h3>
  ));

  return (
    <Fragment>
      <ul>{meals}</ul>
    </Fragment>
  );
};

export default AvailableMeals;
