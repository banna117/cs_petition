import React, { useState } from "react";
import "./PetitionPage.css";
import ListedPetition from "../components/ListedPetition";

const petitions = [
    {
        id : 'minsoo1',
        title : "학교 설비를 바꿔주세요. 부탁드립니다 사감선생asdfwegtawerg님. ",
        content: "Do you agree?",
        date: "2021.06.13"
    },
    {
        id : 'minsoo2',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?",
        date: "2021.06.13"
    },
    {
        id : 'minsoo3',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?",
        date: "2021.06.13"
    },
    {
        id : 'minsoo4',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?",
        date: "2021.06.13"
    },
    {
        id : 'minsoo5',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?",
        date: "2021.06.13"
    },
    {
        id : 'minsoo6',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?",
        date: "2021.06.13"
    },
    {
        id : 'minsoo7',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?",
        date: "2021.06.13"
    }
  ]
export default function PetitionPage() {
  

  const [count, setCount] = useState(0);


  return (
    <div className="petition">
      <div className="input">
        <button className="filter">필터</button>
        <input className="filter_input" type="text" list='filter-example' placeholder="단어를 입력하세요."/>

        <datalist id = "filter-example">
          <option value="설비"></option>
          <option value="물품"></option>
          <option value="학업"></option>
        </datalist>

        <button className="write">작성하기</button>
      </div>
      <div className="petitionlist">
         {/* to show only 4 items per menu */}
         
        {petitions.map((petition) => {
          
            return (
              <ListedPetition
                key={petition.id}
                title={petition.title}
                date={petition.date}

              />);
          
        })}
      </div>
    </div>
  );
}
