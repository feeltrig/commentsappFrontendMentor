import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";
import PostComment from "./postcomment";
import RepliesContainer from "./Replies/RepliesContainer";

const CommentGroup = ({ commentobject, currentUser }) => {
  const [addreply, setaddreply] = useState(false);
  const [editComment, setEditComment] = useState(false);
  let sortedReplies = [];

  // SORTED REPLIES
  if (commentobject.replies) {
    sortedReplies = [...commentobject.replies];
    sortedReplies.sort((a, b) => {
      return b.score - a.score;
    });
  }

  return (
    <>
      {/* main outer comment */}
      {!editComment && (
        <Commenttemplate
          isReply={false}
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
          commentcontent={commentobject.content}
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
          commentcontent={commentobject.content}
        />
      )}

      {/* all replies */}
      <RepliesContainer
        replies={commentobject.replies}
        currentUser={currentUser}
        parentReplyId={commentobject.id}
      />
    </>
  );
};

export default CommentGroup;
