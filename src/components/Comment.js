import React from "react";
import "./Comment.scss";
import Dot from "../assets/icons/dot";

export default function Comment({comment:{pid, comId, uid, content, date}}) {
 
  return (
    
    <div className="comment">

      <div className="content-box">
        <p className="content">{content}</p>
        <p className="sub-title">{uid} <Dot /> {date}</p>
      </div>
      <div className="divider" />
    </div>
  )
}