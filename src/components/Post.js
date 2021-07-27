import React, { useEffect } from "react";
import "./Post.scss";
import Category from "./Category";
import Dot from "../assets/icons/dot";
import Comment from "./Comment";
import CustomEditor from "./CustomEditor";

export default function Post({ petitionInfo: { pid, uid, title, catId, description, date, state }, comments, addNewComment, categories, closePost, socket }) {
    console.log(comments)

    useEffect(() => {
        socket.on("addComment", (addingComment) => {
            //이 post에 달린 댓글들의 수
            const comId = comments.length;
            const date = new Date().toLocaleDateString();
            addNewComment({ pid, comId, uid, content: addingComment, date });
            console.log(comments);
        })
    }, [socket])

    const sendNewComment = (content) => {
        const comId = comments.length;
        socket.emit("newComment", { pid, comId, uid, content, date });
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

                <CustomEditor sendNewComment={sendNewComment} />
                {comments.map((comment) =>
                    <Comment key={comment.comId} comment={comment} />
                )
                }
            </div>
        </div>
    );
}