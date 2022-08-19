import { current } from "@reduxjs/toolkit";

const handleScorefn = (state, id, action) => {
  let indexcounter = -1;

  // find object in current array
  state.forEach((element, index) => {
    return element.id == id ? (indexcounter = index) : null;
  });

  // if i found the object
  if (indexcounter !== -1) {
    if (action == "plus") {
      state[indexcounter].score++;
      return;
    } else if (action == "minus") {
      state[indexcounter].score--;
      return;
    }
  }

  // find if replies exists, find the index and change the score
  state.forEach((element, index) => {
    if (element.replies) {
      handleScorefn(element.replies, id, action);
    }
  });

  return null;
};

export default handleScorefn;
