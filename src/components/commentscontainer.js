import React from "react";
import { useSelector } from "react-redux";
import Commentsdialog from "../components/commentsdialog";

// database
import commentdata from "../design/data.json";

const CommentsContainer = () => {
  const mainAppState = useSelector((state) => {
    return state.postComment;
  });

  console.log(mainAppState);
  return (
    <>
      <div className="commentscontainer">
        {mainAppState.comments.map((commentobject, index) => {
          return (
            <div key={index}>
              <Commentsdialog indexkey={index} commentobject={commentobject} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsContainer;
