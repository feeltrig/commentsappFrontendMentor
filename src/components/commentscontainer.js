import React from "react";
import Commentsdialog from "../components/commentsdialog";

// database
import commentdata from "../design/data.json";

const CommentsContainer = () => {
  console.log(commentdata);
  return (
    <>
      <div className="commentscontainer">
        {commentdata.comments.map((comments) => {
          return (
            <>
              <Commentsdialog userobject={comments} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default CommentsContainer;
