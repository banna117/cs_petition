import React from "react";
import "./Comment.scss";
import Dot from "../assets/icons/dot";

export default function Comment() {
  return (
    <div className="comment">
      <div className="content-box">
        <p className="content">내용</p>
        <p className="sub-title">이름 <Dot /> 2021.06.30</p>
      </div>
      <div className="divider" />
    </div>
  )
}