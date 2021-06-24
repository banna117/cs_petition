import React from "react";
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
    }
  ]
export default function PetitionPage() {
  return (
    <div className="petition">
      <div className="input">
        <button className="filter">필터</button>
        <input className="filter_input" type="text" />
        <button className="write">작성하기</button>
      </div>
      <div className="petitionlist">
        
      {petitions.map((petition) => {
          return (
            <ListedPetition
                key = {petition.id}
              title={petition.title}
              date = {petition.date}

            />);
        })}
      </div>
    </div>
  );
}
