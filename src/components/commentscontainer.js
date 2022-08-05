import React from "react";
import Commentsdialog from "../components/commentsdialog";

// database
import commentdata from "../design/data.json";

const CommentsContainer = ({ commentobject }) => {
  return (
    <>
      <div className="commentscontainer">
        {commentobject.comments.map((comments, index) => {
          return (
            <div key={index}>
              <Commentsdialog userobject={comments} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsContainer;
