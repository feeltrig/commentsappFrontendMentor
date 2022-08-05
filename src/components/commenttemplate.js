import React from "react";
import replyicon from "../design/images/icon-reply.svg";
import editicon from "../design/images/icon-edit.svg";
import deleteicon from "../design/images/icon-delete.svg";

const Commenttemplate = ({ userobject }) => {
  // INIT
  const { createdAt, content, score, user } = userobject;
  return (
    <div className="comments">
      <div className="leftcommentsection">
        <div className="plus">+</div>
        <div className="score">{score}</div>
        <div className="minus">-</div>
      </div>
      <div className="rightcommentsection">
        <header className="commentheader">
          <div className="avatar"></div>
          <name>{user.username}</name>
          <tag></tag>
          <time>{createdAt}</time>

          {userobject && (
            <reply>
              <img src={replyicon} style={{ marginInline: "0.5rem" }} />
              Reply
            </reply>
          )}
          {false && (
            <>
              <delete>
                <img src={deleteicon} style={{ marginInline: "0.5rem" }} />
                Delete
              </delete>
              <edittag>
                <img src={editicon} style={{ marginInline: "0.5rem" }} />
                Edit
              </edittag>
            </>
          )}
        </header>
        <p className="commenttext">{content}</p>
      </div>
    </div>
  );
};

export default Commenttemplate;
