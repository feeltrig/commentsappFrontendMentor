import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";

const Reply = ({ commentobject }) => {
  return (
    <div className="reply">
      <Commenttemplate commentobject={commentobject} />
    </div>
  );
};

export default Reply;
