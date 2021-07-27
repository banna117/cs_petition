import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/WritingModal.scss";


export default function WritingModal(props) {
    //filterCategoryState: 새로운 청원의 카테고리
    //titleLength: title 텍스트의 길이
    //contentLength: description 텍스트의 길이
	const [filterCategoryState, setFilterCategoryState] = useState(-1);
    const [titleLength, setTitleLength] = useState(0);
    const [contentLength, setContentLength] = useState(0);

    const { closeWritingModal, writeComplete } = props;
 
    //제목을 1글자 이상 적고, 내용을 1글자 이상 적고, 카테고리를 선택한 상태에서만 버튼을 활성화한다.
    useEffect(()=>{
        const btn = document.getElementById("write-complete-btn");
        
        if(titleLength && contentLength && (filterCategoryState !== -1)){
            btn.disabled = false;
        }
        else{btn.disabled = 'disabled';}
    });
 
    return (
        <div className="writing-bg">
            <div className="writing-modal">

                <div className="writing-navigation">
                    <h1 className="logo">LOGO</h1>
                    <button 
                    className={"write-petition "} 
                    id="write-complete-btn" 
                    onClick={()=>writeComplete(document.getElementById('title-input').value, filterCategoryState, document.getElementById("content-input").value)}>작성 완료</button>
                    <button className="cancel-petition" onClick={closeWritingModal}>작성 취소</button>
                </div>
                <div className="writing-main">
                    <div className="main-title">
                        <p className="title-text">제목({titleLength}/100)</p>
                        <input className="title-input" placeholder="내용을 쉽게 파악할 수 있도록 제목을 적어주세요." maxLength="100" id="title-input" onChange={(e) => setTitleLength(e.target.value.length)}></input>
                    </div>
                    <div className="main-category">
                        <p className="category-text">카테고리</p>
                        <div className="categories">
                            <button className={"facility " + (filterCategoryState === 0 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(0)}>시설</button>
                            <button className={"academy " + (filterCategoryState === 1 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(1)}>학업</button>
                            <button className={"welfare " + (filterCategoryState === 2 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(2)}>복지</button>
                            <button className={"future " + (filterCategoryState === 3 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(3)}>미래</button>
                            <button className={"administration " + (filterCategoryState === 4 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(4)}>행정</button>
                            <button className={"etc " + (filterCategoryState === 5 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(5)}>기타</button>
                        </div>
                    </div>
                    <div className="main-content">
                        <h3 className="content-text">내용({contentLength}/3000)</h3>
                        <textarea className="content-input" maxLength="3000" placeholder="청원 내용을 상세히 적어주세요." id="content-input" onChange={(e) => setContentLength(e.target.value.length)}></textarea>
                    </div>
                </div>
            </div>
        </div>

    );

}