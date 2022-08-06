import React from "react";
import { useSelector } from "react-redux";

import Reply from "../components/reply";
import Commenttemplate from "./commenttemplate";

const Commentsdialog = ({ commentobject }) => {
  return (
    <>
      <Commenttemplate commentobject={commentobject} />
      {commentobject.replies.map((item, index) => {
        return <Reply key={index} commentobject={item} />;
      })}
    </>
  );
};

export default Commentsdialog;
