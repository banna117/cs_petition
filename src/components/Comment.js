import React from "react";
import "./Comment.scss";
import Dot from "../assets/icons/dot";

export default function Comment({comment:{pid, comId, uid, content, date}, users}) {
 const user = users.filter((user) => user.uid === uid)
  return (
    
    <div className="comment">

      <div className="content-box">
        <p className="content">{content}</p>
        <p className="sub-title">{user[0]} <Dot /> {date}</p>
      </div>
      <div className="divider" />
    </div>
  )
}