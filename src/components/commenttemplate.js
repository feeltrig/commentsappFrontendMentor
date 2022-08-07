import React, { useState } from "react";

// ICONS
import replyicon from "../design/images/icon-reply.svg";
import editicon from "../design/images/icon-edit.svg";
import deleteicon from "../design/images/icon-delete.svg";

// REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
// change score
import { handleScore } from "../appState/mainAppStateSlice";
import { deleteComment } from "../appState/mainAppStateSlice";

const Commenttemplate = ({
  commentobject,
  isReply,
  currentUser,
  addreply,
  setaddreply,
  setisRelative,
}) => {
  // INIT
  // input object
  // dispatch funtion
  // add reply
  const { createdAt, content, score, user, id } = commentobject;
  const dispatch = useDispatch();

  // UPADTE SCORE
  const updateScore = (e) => {
    const value = e.target.value;

    if (value == "plus") {
      dispatch(handleScore({ type: "plus", id }));
    } else if (value == "minus") {
      dispatch(handleScore({ type: "minus", id }));
    }
  };

  // DELETE CURRENT USER COMMENT
  const handleDelete = () => {
    dispatch(deleteComment({ id }));
  };

  return (
    <div className={isReply ? "comments reply" : "comments"}>
      {/* left section */}
      <div className="leftcommentsection">
        <button className="plus" value="plus" onClick={updateScore}>
          +
        </button>
        <div className="score">{score}</div>
        <button className="minus" value="minus" onClick={updateScore}>
          -
        </button>
      </div>

      {/* right section */}
      <div className="rightcommentsection">
        {/* header */}
        <header className="commentheader">
          <div className="avatar"></div>
          <div className="name">{user.username}</div>
          <div className="tag"></div>
          <time>{createdAt}</time>

          {/* reply */}
          {currentUser.username !== user.username && (
            <div
              className="replybtn"
              onClick={() => {
                setaddreply((prev) => !prev);
              }}
            >
              <img src={replyicon} style={{ marginInline: "0.5rem" }} />
              Reply
            </div>
          )}

          {/* delete and edit */}
          {currentUser.username == user.username && (
            <>
              <div className="deleteclass" onClick={handleDelete}>
                <img src={deleteicon} style={{ marginInline: "0.5rem" }} />
                Delete
              </div>
              <div className="editclass">
                <img src={editicon} style={{ marginInline: "0.5rem" }} />
                Edit
              </div>
            </>
          )}
        </header>
        <p className="commenttext">{content}</p>
      </div>
    </div>
  );
};

export default Commenttemplate;
