import React from "react";
import "./Post.scss";
import Category from "./Category";
import Dot from "../assets/icons/dot";
import Comment from "./Comment";
import CustomEditor from "./CustomEditor";

export default function Post({ petitionInfo: { pid, uid, title, catId, description, date, state }, commentInfo , closePost }) {
  return (
    <div className="post" onClick={() => closePost()}>

      <div className="title-box">
        <div className="category-list">
          <Category name={catId} />
          <Category name="000명" />
          <Category name={state} />
        </div>
        <p className="title">{title}</p>
        <p className="sub-title">{uid} <Dot /> {date}</p>
      </div>
      <p className="description">{description}</p>
      <div className="agree-box">
        <p>현재까지 0명이 동의했습니다.</p>
        <button>청원 동의하기</button>
      </div>
      <div className="comment-box">
        <CustomEditor />
        {commentInfo.map((comment)=>

          <Comment key={comment.comId} comment={comment}/>
        
          )
        }
      </div>
    </div>
  );
}