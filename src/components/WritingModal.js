import React, { useState } from "react";
import "../components/WritingModal.scss";

export default function WritingModal(props) {
	let [filterCategoryState, setFilterCategoryState] = useState(-1);
    
    const { closeWritingModal } = props;

    return (
        <div className="writing-modal">
            <div className="writing-navigation">
                <h1>LOGO</h1>
                <button className="write-petition">작성 완료</button>
                <button className="cancel-petition" onClick={closeWritingModal}>작성 취소</button>
            </div>
            <div className="writing-main">
                <div className="main-title">
                    <p>제목(0/100)</p>
                    <input placeholder="내용을 쉽게 파악할 수 있도록 제목을 적어주세요."></input>
                </div>
                <div className="main-category">
                    <p1>카테고리</p1>
                    <div className="categories">
                        <button className={"academy " + (filterCategoryState === 0 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(0)}>학업</button>
                        <button className={"facility " + (filterCategoryState === 1 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(1)}>시설</button>
                        <button className={"future " + (filterCategoryState === 2 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(2)}>미래</button>
                        <button className={"what " + (filterCategoryState === 3 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(3)}>머임</button>
                        <button className={"welfare " + (filterCategoryState === 4 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(4)}>복지</button>
                        <button className={"administration " + (filterCategoryState === 5 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(5)}>행정</button>
                        <button className={"etc " + (filterCategoryState === 6 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(6)}>기타</button>
                    </div>
                </div>
                <div className="main-content">
                    <p>내용(0/3000)</p>
                    <textarea className="contents" placeholder="청원 내용을 상세히 적어주세요."></textarea>
                </div>
            </div>
        </div>

    );

}