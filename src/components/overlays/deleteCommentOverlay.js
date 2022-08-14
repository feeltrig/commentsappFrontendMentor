import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../appState/mainAppStateSlice";

const DeleteCommentOverlay = ({ setopenDeleteModal, deleteCommentId }) => {
  // INIT
  // dispatcher
  const dispatch = useDispatch();

  return (
    <div className="deleteCommentOverlay">
      <div className="deleteCommentModal">
        <h2>Delete Comment</h2>
        <p>Are you sure you wanna delete this comment? this cant be undone</p>

        <div className="confirmationbuttons">
          <div
            onClick={() => {
              setopenDeleteModal(false);
            }}
          >
            NO, CANCEL
          </div>
          <div
            onClick={() => {
              dispatch(deleteComment({ id: deleteCommentId }));
              setopenDeleteModal(false);
            }}
          >
            YES, DELETE
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentOverlay;
