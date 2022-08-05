import React, { useState } from "react";
import replyicon from "../design/images/icon-reply.svg";
import editicon from "../design/images/icon-edit.svg";
import deleteicon from "../design/images/icon-delete.svg";

const Commenttemplate = ({ userobject }) => {
  // INIT
  // input object
  // score
  const { createdAt, content, score, user } = userobject;
  const [currentScore, setcurrentScore] = useState(score);

  // UPADTE SCORE
  const updateScore = (e) => {
    const value = e.target.value;

    if (value == "plus") {
      setcurrentScore((prev) => prev + 1);
    } else if (value == "minus") {
      setcurrentScore((prev) => prev - 1);
    }
  };

  // UPDATE STATE TO CUURENT SCORE
  const updateStateScore = () => {};

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

          {userobject && (
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
