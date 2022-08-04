import React from "react";
import Reply from "./reply";
import Commentsdialog from "../components/commentsdialog";
import PostComment from "./postcomment";

const CommentsContainer = () => {
  return (
    <div className="commentscontainer">
      <Commentsdialog username={"samual"} />
      <Reply username={"iamtheuser"} />
      <PostComment />
    </div>
  );
};

export default CommentsContainer;
