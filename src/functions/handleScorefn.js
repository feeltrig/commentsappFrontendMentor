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
    } else if (action == "minus") {
      state[indexcounter].score--;
    }
  } else if (state.replies) {
    handleScorefn(state.replies, id);
  } else {
    return null;
  }
};

export default handleScorefn;
