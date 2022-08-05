import React from "react";

import Reply from "../components/reply";
import Commenttemplate from "./commenttemplate";

const Commentsdialog = ({ userobject }) => {
  // INIT

  return (
    <>
      <Commenttemplate userobject={userobject} />
      {userobject.replies.map((item, index) => {
        return <Reply key={index} userobject={item} />;
      })}
    </>
  );
};

export default Commentsdialog;
