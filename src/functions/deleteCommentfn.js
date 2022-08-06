import { current } from "@reduxjs/toolkit";

const deleteCommentfn = (state, id) => {
  let indexcounter = -1;

  // find object in current array
  state.forEach((element, index) => {
    return element.id == id ? (indexcounter = index) : null;
  });

  // find if replies exists, find the index and change the score
  state.forEach((element, index) => {
    if (element.replies) {
      deleteCommentfn(element.replies, id);
    }
  });

  // if i found the object
  if (indexcounter !== -1) {
    console.log(indexcounter);
    state.splice(indexcounter, 1);
    return null;
  }

  return null;
};

export default deleteCommentfn;
