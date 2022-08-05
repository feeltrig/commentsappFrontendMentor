import { configureStore } from "@reduxjs/toolkit";

import mainAppStateSlice from "./mainAppStateSlice";

export default configureStore({
  reducer: {
    postComment: mainAppStateSlice,
  },
});
