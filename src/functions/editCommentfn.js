import { current } from "@reduxjs/toolkit";

const editCommentfn = (state, id, payload) => {
  let indexcounter = -1;

  // find object in current array
  state.forEach((element, index) => {
    return element.id == id ? (indexcounter = index) : null;
  });

  // find if replies exists, find the index and change the score
  state.forEach((element, index) => {
    if (element.replies) {
      editCommentfn(element.replies, id, payload);
    }
  });

  // if i found the object
  if (indexcounter !== -1) {
    state[indexcounter].content = payload;
    return null;
  }

  return null;
};

export default editCommentfn;
