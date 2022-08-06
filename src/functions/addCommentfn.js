import { current } from "@reduxjs/toolkit";

let temp = [];

const addCommentfn = (state, payload) => {
  const populateids = (state, payload) => {
    state.forEach((element) => {
      if (element.id) {
        temp.push(element.id);
      }

      if (element.replies) {
        populateids(element.replies, payload);
      }
    });
  };

  populateids(state, payload);

  return Math.max(...temp) + 1;
};

export default addCommentfn;
