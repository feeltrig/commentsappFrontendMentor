import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from ".././design/images/avatars/image-ramsesmiron.webp";

// ACTIONS
import { addComment } from "../appState/mainAppStateSlice";

const PostComment = ({ commentobject, setAppState }) => {
  // INIT
  // comment state
  const [myComment, setmyComment] = useState("");
  const mainAppState = useSelector((state) => {
    return state.postComment;
  });
  const dispatch = useDispatch();

  // HANDLE INPUT
  const handleInput = (e) => {
    const name = e.target.name;

    if (name == "userComment") {
      setmyComment(e.target.value);
    }
  };

  // APPEND NEW COMMENT
  const appendComment = (comment) => {
    // generate id
    const id = mainAppState.comments.length + 1;
    const createdAt = "1 month ago";
    const user = mainAppState.currentUser;

    // GENERATE OBJECT TO APPEND
    const payload = {
      content: myComment,
      createdAt,
      score: 0,
      replies: [],
      user,
    };

    // UPDATING STATE
    dispatch(addComment(payload));

    // cleaners
    setmyComment("");
  };

  return (
    <div className="postcomment">
      <div className="avatar">
        <img src={avatar} style={{ width: "3rem" }} />
      </div>
      <div className="textinput">
        <textarea name="userComment" value={myComment} onChange={handleInput} />
      </div>
      <button type="button" onClick={appendComment} className="sendbtn">
        SEND
      </button>
    </div>
  );
};

export default PostComment;
