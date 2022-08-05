import React, { useState } from "react";
import avatar from ".././design/images/avatars/image-ramsesmiron.webp";

const PostComment = ({ commentobject, setAppState }) => {
  // INIT
  // comment state
  const [myComment, setmyComment] = useState("");

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
    const id = commentobject.comments.length + 1;
    const createdAt = "1 month ago";
    const user = commentobject.currentUser;

    // GENERATE OBJECT TO APPEND
    const payload = {
      content: myComment,
      createdAt,
      id,
      score: 0,
      replies: [],
      user,
    };

    // UPDATING STATE
    setAppState((prev) => {
      const newstate = { ...prev };
      newstate.comments.push(payload);
      console.log(newstate);
      return newstate;
    });

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
