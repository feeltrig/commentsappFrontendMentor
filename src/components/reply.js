import React, { useState } from "react";
import Commentsdialog from "./commentsdialog";

const Reply = ({ username }) => {
  // INIT
  // user validation
  const [isUser, setIsUser] = useState(true);
  return (
    <div className="reply">
      <Commentsdialog isUser={isUser} username={username} />
    </div>
  );
};

export default Reply;
