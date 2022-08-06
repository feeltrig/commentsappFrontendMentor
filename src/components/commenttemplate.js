import React, { useState } from "react";
import replyicon from "../design/images/icon-reply.svg";
import editicon from "../design/images/icon-edit.svg";
import deleteicon from "../design/images/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import { handleScore } from "../appState/mainAppStateSlice";

const Commenttemplate = ({ commentobject }) => {
  // INIT
  // input object
  // score

  const { createdAt, content, score, user, id } = commentobject;
  const [currentScore, setcurrentScore] = useState(score);
  const dispatch = useDispatch();

  // UPADTE SCORE
  const updateScore = (e) => {
    const value = e.target.value;

    if (value == "plus") {
      // setcurrentScore((prev) => prev + 1);
      dispatch(handleScore({ type: "plus", id }));
    } else if (value == "minus") {
      // setcurrentScore((prev) => prev - 1);
      dispatch(handleScore({ type: "minus", id }));
    }
  };

  return (
    <div className="comments">
      <div className="leftcommentsection">
        <button className="plus" value="plus" onClick={updateScore}>
          +
        </button>
        <div className="score">{currentScore}</div>
        <button className="minus" value="minus" onClick={updateScore}>
          -
        </button>
      </div>
      <div className="rightcommentsection">
        <header className="commentheader">
          <div className="avatar"></div>
          <div className="name">{user.username}</div>
          <div className="tag"></div>
          <time>{createdAt}</time>

          {true && (
            <div className="replybtn">
              <img src={replyicon} style={{ marginInline: "0.5rem" }} />
              Reply
            </div>
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
