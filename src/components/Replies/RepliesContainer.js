import React, { useState } from "react";
import Commenttemplate from "../commenttemplate";
import PostComment from "../postcomment";
import RepliesGroup from "./RepliesGroup";

const RepliesContainer = ({ replies, currentUser, parentReplyId }) => {
  let sortedReplies = [];

  // SORTED
  if (replies) {
    sortedReplies = [...replies];
    sortedReplies.sort((a, b) => {
      return b.score - a.score;
    });
  }
  return (
    <div>
      {sortedReplies.map((objs) => {
        return (
          <div key={objs.id}>
            <RepliesGroup
              commentobject={objs}
              parentReplyId={parentReplyId}
              currentUser={currentUser}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RepliesContainer;
