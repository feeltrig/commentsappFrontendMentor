const deleteCommentfn = (state, id) => {
  let indexcounter = -1;

  // find object in current array
  state.forEach((element, index) => {
    return element.id == id ? (indexcounter = index) : null;
  });

  // if i found the object
  if (indexcounter !== -1) {
    state.splice(indexcounter, 1);
  } else if (state.replies) {
    deleteCommentfn(state.replies, id);
  } else {
    return null;
  }
};

export default deleteCommentfn;
