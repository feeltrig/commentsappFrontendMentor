import { current } from "@reduxjs/toolkit";

let temp = [];

const addCommentfn = (state) => {
  const populateids = (state) => {
    state.forEach((element) => {
      if (element.id) {
        temp.push(element.id);
      }

      if (element.replies) {
        populateids(element.replies);
      }
    });
  };

  populateids(state);

  return Math.max(...temp) + 1;
};

export default addCommentfn;
