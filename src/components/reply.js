import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";

const Reply = ({ userobject }) => {
  return (
    <div className="reply">
      <Commenttemplate userobject={userobject} />
    </div>
  );
};

export default Reply;
