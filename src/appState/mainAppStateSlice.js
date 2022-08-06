// JSON
import commentobject from "../design/data.json";
// FUNTIONS
import deleteCommentfn from "../functions/deleteCommentfn";
import handleScorefn from "../functions/handleScorefn";

const { createSlice, current } = require("@reduxjs/toolkit");

export const mainAppStateSlice = createSlice({
  name: "mainAppStateSlice",
  initialState: commentobject,

  reducers: {
    addComment: (prevState, action) => {
      prevState.comments.push(action.payload);
    },
    handleScore: (prevState, action) => {
      const { type, id } = action.payload;
      handleScorefn(prevState.comments, id, type);
      console.log(current(prevState));
    },
    handleDelete: (prevState, id) => {
      deleteCommentfn(prevState.comments, id);
    },
  },
});

// EXPORTS
export const { addComment, handleScore } = mainAppStateSlice.actions;
export default mainAppStateSlice.reducer;
