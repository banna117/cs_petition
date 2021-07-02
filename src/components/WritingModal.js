import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/WritingModal.scss";


export default function WritingModal(props) {
	let [filterCategoryState, setFilterCategoryState] = useState(-1);
    let [titleLength, setTitleLength] = useState(0);
    let [contentLength, setContentLength] = useState(0);

    const { closeWritingModal, petitionsSize, setPetitions, petitions, petitionCat, setPetitionCat} = props;
 
    useEffect(()=>{
        const btn = document.getElementById("write-complete-btn");
        
        if(titleLength && contentLength && (filterCategoryState !== -1)){
            btn.disabled = false;
        }
        else{btn.disabled = 'disabled';}
    });

    const writeComplete = () => {
        const title = document.getElementById('title-input').value;
        const catId = filterCategoryState;
        const description = document.getElementById("content-input").value;
        const uid = 1;
        const pid = petitionsSize;
        const post = {pid, uid, title, catId, description};


        console.log(post);
       let today=new Date();
       const state=0;
       const date=today.toLocaleDateString();

        axios.post("http://localhost:4000/test",{latestPost: post})
        .then((res)=> {
            console.log(res);
        })
        .catch((err) => console.log(err));
        

        //send the result to the react client
        const newPetition = {pid, uid, title, catId, description, date, state };
        const new2Petitions = petitions;
        new2Petitions.push(newPetition)

        setPetitions(new2Petitions);
        let temp = petitionCat;
        temp[newPetition.catId].push(newPetition);
		setPetitionCat(temp);

        closeWritingModal();
    }

    return (
        <div className="writing-bg">
            <div className="writing-modal">

                <div className="writing-navigation">
                    <h1 className="logo">LOGO</h1>
                    <button className={"write-petition "} id="write-complete-btn" onClick={writeComplete}>작성 완료</button>
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