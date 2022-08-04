import React from "react";
import replyicon from "../design/images/icon-reply.svg";
import editicon from "../design/images/icon-edit.svg";
import deleteicon from "../design/images/icon-delete.svg";

const Commentsdialog = ({ isUser, username }) => {
  return (
    <div className="comments">
      <div className="leftcommentsection">
        <div className="plus">+</div>
        <div className="score">20</div>
        <div className="minus">-</div>
      </div>
      <div className="rightcommentsection">
        <header className="commentheader">
          <div className="avatar"></div>
          <name>{username}</name>
          <tag></tag>
          <time>1 hour ago</time>

          {!isUser && (
            <reply>
              <img src={replyicon} style={{ marginInline: "0.5rem" }} />
              Reply
            </reply>
          )}
          {isUser && (
            <>
              <delete>
                <img src={deleteicon} style={{ marginInline: "0.5rem" }} />
                Delete
              </delete>
              <edittag>
                <img src={editicon} style={{ marginInline: "0.5rem" }} />
                Edit
              </edittag>
            </>
          )}
        </header>
        <p className="commenttext">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ab nihil
          aperiam eligendi dolorem atque quaerat repellat maxime quisquam quidem
          tempore cupiditate numquam qui neque, facere voluptas architecto eius
          quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam, ea at saepe quae molestias provident assumenda similique, quod
          a eum repellendus totam ad asperiores temporibus nihil fuga
          dignissimos nostrum. Laboriosam cumque in dolores officia. Odit neque
          recusandae aliquam molestiae tenetur ab, eveniet earum corporis,
          placeat consequuntur pariatur velit, quisquam nostrum?
        </p>
      </div>
    </div>
  );
};

export default Commentsdialog;
