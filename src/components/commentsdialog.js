import React from "react";

import Reply from "../components/reply";
import Commenttemplate from "./commenttemplate";

const Commentsdialog = ({ userobject }) => {
  console.log(userobject.replies);
  // INIT

  return (
    <>
      <Commenttemplate userobject={userobject} />
      {userobject.replies.map((item) => {
        return <Reply userobject={item} />;
      })}
    </>
  );
};

export default Commentsdialog;
