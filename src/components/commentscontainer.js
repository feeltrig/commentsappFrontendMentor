import React from "react";
import { useSelector } from "react-redux";
import Commentsdialog from "../components/commentsdialog";

// database
import commentdata from "../design/data.json";

const CommentsContainer = () => {
  const mainAppState = useSelector((state) => {
    return state.postComment;
  });

  return (
    <>
      <div className="commentscontainer">
        {mainAppState.comments.map((commentobject, index) => {
          return (
            <Commentsdialog
              key={index}
              indexkey={index}
              commentobject={commentobject}
            />
          );
        })}
      </div>
    </>
  );
};

export default CommentsContainer;
