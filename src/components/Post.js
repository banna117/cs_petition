import React, { useEffect } from "react";
import "./Post.scss";
import Category from "./Category";
import Dot from "../assets/icons/dot";
import Comment from "./Comment";
import CustomEditor from "./CustomEditor";

export default function Post({ store, petitionInfo: { pid, uid, title, catId, description, date, state }, comments,  categories, closePost, agreements, socket, user,  users}) {
    //currentUser
    const currentUser = store.getState().loginned.currentUser;

    //comId => comments 의 length를 따져서 부여,
    const sendNewComment = (content) => {
        if(!store.getState().loginned.loginned){alert("로그인이 필요한 서비스입니다.")}
        else{
        const comId = comments.length;
        socket.emit("newComment", { pid, comId, uid:parseInt(currentUser.uid), content, date });
        }
    }

    const sendNewAgreement = () => {
        if(!store.getState().loginned.loginned){alert("로그인이 필요한 서비스입니다.")}
        //agreements 에 이미 동의한 상태
        else if(agreements.some(function (item){return item.uid === parseInt(currentUser.uid);})){
            
            alert("이미 동의한 청원입니다!")
        }
        else {socket.emit("newAgree", {pid, uid:parseInt(currentUser.uid)})}
    }
    
    return (
        <div className="post" >
            <div className="close-spot">
                <button className="close-button" onClick={() => closePost()}>X</button>
            </div>
            <div className="title-box">
                <div className="category-list">
                    <Category filter={-1} name={categories.map((category) => {
                        if (catId == category.catId) { return category.name; }
                    })} />
                    <Category filter={-1} name={agreements.length+"명"} />
                    <Category filter={-1} name={state === 0 ? "진행 중" : (state === 1 ? "답변됨" : "만료됨")} />
                </div>
                <p className="title">{title}</p>
                <p className="sub-title">{user[0].name} <Dot /> {date}</p>
            </div>
            <p className="description">{description}</p>
            <div className="agree-box">
                <div className="agree-num">현재까지 {agreements.length}명이 동의했습니다.</div>
                <button className="agree-btn" onClick={sendNewAgreement}>청원 동의하기</button>
            </div>
            <div className="comment-box">

                <CustomEditor sendNewComment={sendNewComment} />
                {comments.map((comment) =>
                    <Comment key={comment.comId} comment={comment} users={users}/>
                )
                }
            </div>
        </div>
    );
}