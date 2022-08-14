import React, { useState } from "react";

// COMPONENTS
import DeleteCommentOverlay from "../components/overlays/deleteCommentOverlay";

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
  setEditComment,
}) => {
  // INIT
  // input object
  // dispatch funtion
  // add reply
  // delete modal
  const { createdAt, content, score, user, id } = commentobject;
  const dispatch = useDispatch();
  const [openDeleteModal, setopenDeleteModal] = useState(false);

  // UPADTE SCORE
  const updateScore = (e) => {
    const value = e.target.value;

    if (value == "plus") {
      dispatch(handleScore({ type: "plus", id }));
    } else if (value == "minus") {
      dispatch(handleScore({ type: "minus", id }));
    }
  };

  // EDIT USER COMMENT
  const handleEditComment = () => {
    setEditComment(true);
  };

  // DELETE CURRENT USER COMMENT
  const handleDelete = () => {
    setopenDeleteModal(true);
  };

  return (
    // set reply styles if is a reply
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
              {/* change text after clicking reply button to close */}
              <img
                src={replyicon}
                alt="replyicon"
                style={{ marginInline: "0.5rem" }}
              />
              {addreply ? "Close" : "Reply"}
            </div>
          )}

          {/* delete and edit if its current user*/}
          {currentUser.username == user.username && (
            <>
              {openDeleteModal && (
                <DeleteCommentOverlay
                  deleteCommentId={id}
                  setopenDeleteModal={setopenDeleteModal}
                />
              )}
              <div className="deleteclass" onClick={handleDelete}>
                <img
                  src={deleteicon}
                  alt="deleteicon"
                  style={{ marginInline: "0.5rem" }}
                />
                Delete
              </div>
              <div className="editclass" onClick={handleEditComment}>
                <img
                  src={editicon}
                  alt="editicon"
                  style={{ marginInline: "0.5rem" }}
                />
                Edit
              </div>
            </>
          )}
        </header>
        <div className="commenttext">
          <div className="replyingTo">
            {commentobject?.replyingTo && `@${commentobject.replyingTo} `}
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Commenttemplate;
