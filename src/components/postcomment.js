import React from "react";
import avatar from ".././design/images/avatars/image-ramsesmiron.webp";

const PostComment = () => {
  return (
    <div className="postcomment">
      <div className="avatar">
        <img src={avatar} style={{ width: "3rem" }} />
      </div>
      <div className="textinput">
        <textarea name="textarea" />
      </div>
      <button type="button" className="sendbtn">
        SEND
      </button>
    </div>
  );
};

export default PostComment;
