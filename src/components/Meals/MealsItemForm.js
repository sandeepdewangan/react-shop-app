import { Fragment } from "react";

const MealsItemForm = () => {
  return (
    <Fragment>
      <form>
        <input type="number" id="count" min="1" max="10" />
        <button>Add</button>
      </form>
    </Fragment>
  );
};
export default MealsItemForm;
