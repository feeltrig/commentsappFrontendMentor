import React from "react";
import { useSelector } from "react-redux";

import Reply from "../components/reply";
import Commenttemplate from "./commenttemplate";

const Commentsdialog = ({ commentobject, indexkey }) => {
  return (
    <>
      <Commenttemplate indexkey={indexkey} commentobject={commentobject} />
      {commentobject.replies.map((item, index) => {
        return <Reply key={index} indexkey={indexkey} commentobject={item} />;
      })}
    </>
  );
};

export default Commentsdialog;
