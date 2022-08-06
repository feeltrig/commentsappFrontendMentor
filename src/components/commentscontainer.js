import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import Commenttemplate from "./commenttemplate";
import Reply from "./reply";

const CommentsContainer = () => {
  const mainAppState = useSelector((state) => {
    return state.postComment;
  });

  return (
    <>
      <div className="commentscontainer">
        {/* map main comments */}
        {mainAppState.comments.map((commentobject, outerindex) => {
          return (
            <div key={commentobject.id}>
              <Commenttemplate commentobject={commentobject} />
              {/* map replies */}
              {commentobject.replies &&
                commentobject.replies.map((cobj, replyindex) => {
                  return (
                    <Commenttemplate isReply={true} commentobject={cobj} />
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
