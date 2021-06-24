import React from "react";
import "./PetitionPage.css";
import ListedPetition from "../components/ListedPetition";

export default function PetitionPage() {
  return (
    <div className="petition">
      <div className="input">
        <button className="filter">필터</button>
        <input className="filter_input" type="text" />
        <button className="write">작성하기</button>
      </div>
      <div className="petitionlist">
        <ListedPetition />
      </div>
    </div>
  );
}
