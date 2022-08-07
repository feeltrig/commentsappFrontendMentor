import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";
import PostComment from "./postcomment";

const CommentGroup = ({ commentobject, currentUser, isReply }) => {
  const [addreply, setaddreply] = useState(false);

  return (
    <>
      <Commenttemplate
        isReply={isReply}
        commentobject={commentobject}
        currentUser={currentUser}
        addreply={addreply}
        setaddreply={setaddreply}
      />
      <PostComment
        replyid={commentobject.id}
        replyingTo={commentobject.user.username}
        isRelative={addreply}
      />
    </>
  );
};

export default CommentGroup;
