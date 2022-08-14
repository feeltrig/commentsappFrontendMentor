import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from ".././design/images/avatars/image-ramsesmiron.webp";

// ACTIONS
import { addComment, handleEditComment } from "../appState/mainAppStateSlice";
import { handleReply } from "../appState/mainAppStateSlice";

const PostComment = ({
  isRelative,
  replyid,
  replyingTo,
  update,
  setEditComment,
  setaddreply,
  commentcontent,
}) => {
  // INIT
  // comment state
  // main app state
  const [myComment, setmyComment] = useState("");
  const mainAppState = useSelector((state) => {
    return state.postComment;
  });
  const dispatch = useDispatch();

  // SET CONTENT OF INITIAL STATE
  useEffect(() => {
    return update ? setmyComment(commentcontent) : setmyComment("");
  }, []);

  // HANDLE INPUT
  const handleInput = (e) => {
    const name = e.target.name;

    if (name == "userComment") {
      setmyComment(e.target.value);
    }
  };

  // APPEND NEW COMMENT
  const appendComment = () => {
    // generate id
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
    if (!isRelative) {
      dispatch(addComment(payload));
      setmyComment("");

      return;
    } else if (isRelative && !update) {
      dispatch(handleReply({ payload, replyid, replyingTo }));
      setmyComment("");
      setaddreply(false);

      return;
    }

    // close if its a reply box
    // if (isRelative) {
    //   setaddreply(false);
    //   setmyComment("");

    //   return;
    // }

    // cleaners
    return;
  };

  // EDIT USER COMMENT
  const editCommentHandler = () => {
    if (isRelative && update) {
      dispatch(handleEditComment({ content: myComment, id: replyid }));
      setmyComment("");
      setaddreply(false);
      return;
    }
  };

  return (
    <div className={isRelative ? "postcommentrelative" : "postcomment"}>
      <div className="avatar">
        <img src={avatar} alt="profilephoto" style={{ width: "3rem" }} />
      </div>

      {/* comment input */}
      <div className="textinput">
        <textarea
          name="userComment"
          aria-label="commentarea"
          value={myComment}
          onChange={handleInput}
        />
      </div>

      {/* update and send button */}
      {!update ? (
        <button type="button" onClick={appendComment} className="sendbtn">
          SEND
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            editCommentHandler();
            setEditComment(false);
          }}
          className="sendbtn"
        >
          UPDATE
        </button>
      )}
    </div>
  );
};

export default PostComment;
