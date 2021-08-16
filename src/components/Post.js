import React, { useEffect } from "react";
import "./Post.scss";
import Category from "./Category";
import Dot from "../assets/icons/dot";
import Comment from "./Comment";
import CustomEditor from "./CustomEditor";

export default function Post({ petitionInfo: { pid, uid, title, catId, description, date, state }, comments,  categories, closePost, agreements, socket }) {
    console.log(agreements)
    //comId => comments 의 length를 따져서 부여,
    const sendNewComment = (content) => {
        const comId = comments.length;
        socket.emit("newComment", { pid, comId, uid, content, date });
    }

    const sendNewAgreement = () => {
        if(agreements.some(agree=>agree.pid === pid && agree.uid === uid)){
            alert("이미 동의한 청원입니다!")
        }
        else {socket.emit("newAgree", {pid, uid})}
    }
    return (
        <div className="post" >
            <div className="close-spot">
                <button className="close-button" onClick={() => closePost()}>X</button>
            </div>
            <div className="title-box">
                <div className="category-list">
                    <Category name={categories.map((category) => {
                        if (catId == category.catId) { return category.name; }
                    })} />
                    <Category name={agreements.length+"명"} />
                    <Category name={state === 0 ? "진행 중" : (state === 1 ? "답변됨" : "만료됨")} />
                </div>
                <p className="title">{title}</p>
                <p className="sub-title">{uid} <Dot /> {date}</p>
            </div>
            <p className="description">{description}</p>
            <div className="agree-box">
                <p>현재까지 {agreements.length}명이 동의했습니다.</p>
                <button onClick={sendNewAgreement}>청원 동의하기</button>
            </div>
            <div className="comment-box">

                <CustomEditor sendNewComment={sendNewComment} />
                {comments.map((comment) =>
                    <Comment key={comment.comId} comment={comment} />
                )
                }
            </div>
        </div>
    );
}