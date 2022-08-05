import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";

const Reply = ({ commentobject, indexkey }) => {
  return (
    <div className="reply">
      <Commenttemplate indexkey={indexkey} commentobject={commentobject} />
    </div>
  );
};

export default Reply;
