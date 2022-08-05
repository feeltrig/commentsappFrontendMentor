// JSON
import commentobject from "../design/data.json";
const { createSlice } = require("@reduxjs/toolkit");

export const mainAppStateSlice = createSlice({
  name: "mainAppStateSlice",
  initialState: commentobject,

  reducers: {
    addComment: (prevState, action) => {
      prevState.comments.push(action.payload);
    },
    handleScore: (prevState, action) => {
      if (action.payload == "plus") {
      } else if (action.payload == "minus") {
      }
    },
  },
});

// EXPORTS
export const { addComment, handleScore } = mainAppStateSlice.actions;
export default mainAppStateSlice.reducer;
