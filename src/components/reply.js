import React, { useState } from "react";
import Commenttemplate from "./commenttemplate";

const Reply = ({ userobject }) => {
  console.log(userobject);
  return (
    <div className="reply">
      <Commenttemplate userobject={userobject} />
    </div>
  );
};

export default Reply;
