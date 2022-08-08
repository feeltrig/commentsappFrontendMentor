import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";
import PostComment from "./postcomment";

const CommentGroup = ({ commentobject, currentUser, isReply }) => {
  const [addreply, setaddreply] = useState(false);
  const [editComment, setEditComment] = useState(false);

  return (
    <>
      {!editComment && (
        <Commenttemplate
          isReply={isReply}
          commentobject={commentobject}
          currentUser={currentUser}
          addreply={addreply}
          setaddreply={setaddreply}
          setEditComment={setEditComment}
        />
      )}
      {/* edit current comment */}
      {editComment && (
        <PostComment
          replyid={commentobject.id}
          replyingTo={commentobject.user.username}
          isRelative={true}
          update={true}
          setEditComment={setEditComment}
          setaddreply={setaddreply}
        />
      )}

      {/* reply to current comment */}
      {addreply && (
        <PostComment
          replyid={commentobject.id}
          replyingTo={commentobject.user.username}
          isRelative={addreply}
          update={false}
          setaddreply={setaddreply}
        />
      )}
    </>
  );
};

export default CommentGroup;
