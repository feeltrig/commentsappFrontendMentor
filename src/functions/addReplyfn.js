import { current } from "@reduxjs/toolkit";

const addReplyfn = (state, id, payload, replyingTo) => {
  let indexcounter = -1;

  // find object in current array
  state.forEach((element, index) => {
    return element.id == id ? (indexcounter = index) : null;
  });

  // find if replies exists, find the index and change the score
  state.forEach((element, index) => {
    if (element.replies) {
      addReplyfn(element.replies, id, payload, replyingTo);
    }
  });

  // if i found the object
  if (indexcounter !== -1) {
    payload.replyingTo = replyingTo;
    // payload.content = `@${replyingTo} ${payload.content}`;
    state[indexcounter].replies.push(payload);

    return null;
  }

  return null;
};

export default addReplyfn;
