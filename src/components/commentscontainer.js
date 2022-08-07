import React, { useState } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import Commenttemplate from "./commenttemplate";
import Reply from "./reply";
import PostComment from "../components/postcomment";
import CommentGroup from "./commentGroup";

const CommentsContainer = () => {
  // INIT
  // main app state
  const mainAppState = useSelector((state) => {
    return state.postComment;
  });
  const { currentUser } = mainAppState;

  return (
    <>
      <div className="commentscontainer">
        {/* map main comments */}
        {mainAppState.comments.map((commentobject, outerindex) => {
          return (
            <div key={commentobject.id}>
              <CommentGroup
                commentobject={commentobject}
                currentUser={currentUser}
              />

              {/* map replies */}
              {commentobject.replies &&
                commentobject.replies.map((cobj, replyindex) => {
                  return (
                    <CommentGroup
                      isReply={true}
                      key={commentobject.id}
                      commentobject={cobj}
                      currentUser={currentUser}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsContainer;
