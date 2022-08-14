import React, { useState } from "react";
import Commenttemplate from "../commenttemplate";
import PostComment from "../postcomment";

const RepliesGroup = ({ commentobject, currentUser, parentReplyId }) => {
  const [addreply, setaddreply] = useState(false);
  const [editComment, setEditComment] = useState(false);

  const replyingTo = commentobject.user.username;

  return (
    <>
      {/* main outer comment */}
      {!editComment && (
        <Commenttemplate
          isReply={true}
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
          replyingTo={replyingTo}
          isRelative={true}
          update={true}
          commentcontent={commentobject.content}
          setEditComment={setEditComment}
          setaddreply={setaddreply}
        />
      )}

      {/* reply to current comment */}
      {addreply && (
        <PostComment
          replyid={parentReplyId}
          replyingTo={replyingTo}
          isRelative={addreply}
          update={false}
          commentcontent={""}
          setaddreply={setaddreply}
          setEditComment={setEditComment}
        />
      )}
    </>
  );
};

export default RepliesGroup;
