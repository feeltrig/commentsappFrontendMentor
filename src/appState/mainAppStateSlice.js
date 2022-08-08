// JSON
import commentobject from "../design/data.json";
// FUNTIONS
import addCommentfn from "../functions/addCommentfn";
import deleteCommentfn from "../functions/deleteCommentfn";
import handleScorefn from "../functions/handleScorefn";
import addReplyfn from "../functions/addReplyfn";
import editCommentfn from "../functions/editCommentfn";

const { createSlice, current } = require("@reduxjs/toolkit");

export const mainAppStateSlice = createSlice({
  name: "mainAppStateSlice",
  initialState: commentobject,

  reducers: {
    // ADD COMMENT TO GROUP OF COMMENTS
    addComment: (prevState, action) => {
      // find max index and assign it to new payload object
      const maxindex = addCommentfn(prevState.comments);

      if (maxindex) {
        action.payload.id = maxindex;
        prevState.comments.push(action.payload);
      }
    },

    // CHANGE SCORE OF COMMENTS
    handleScore: (prevState, action) => {
      const { type, id } = action.payload;
      handleScorefn(prevState.comments, id, type);
    },

    // DELETE USER COMMENT
    deleteComment: (prevState, action) => {
      const { id } = action.payload;
      deleteCommentfn(prevState.comments, id);
    },

    // EDIT USER COMMENT
    handleEditComment: (prevState, action) => {
      const { id, content } = action.payload;
      editCommentfn(prevState.comments, id, content);
    },

    // ADD REPLY TO ANY COMMENT THAN USER'S
    handleReply: (prevState, action) => {
      const maxindex = addCommentfn(prevState.comments);
      if (maxindex) {
        action.payload.payload.id = maxindex;
        addReplyfn(
          prevState.comments,
          action.payload.replyid,
          action.payload.payload,
          action.payload.replyingTo
        );
      }
    },
  },
});

// EXPORTS
export const {
  addComment,
  handleScore,
  deleteComment,
  handleReply,
  handleEditComment,
} = mainAppStateSlice.actions;
export default mainAppStateSlice.reducer;
