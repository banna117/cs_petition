import React from "react";
import TopPetition from "../components/TopPetition";
import bannerImg from "../assets/img/banner.png";
import "./HomePage.css";



const petitions = [
  {
      id : 'minsoo1',
      title : "학교 설비를 바꿔주세요. 부탁드립니다 사감선생asdfwegtawerg님. ",
      content: "Do you agree?"
  },
  {
      id : 'minsoo2',
      title : "학교 설비를 바꿔주세요.",
      content : "Do you agree?"
  },
  {
      id : 'minsoo3',
      title : "학교 설비를 바꿔주세요.",
      content : "Do you agree?"
  }
]

export default function HomePage() {

  return (
    <div className="home_display">
      <img className="banner" src={bannerImg} alt="배너입니다." />
      <div className="top3">
        {petitions.map((petition) => {
          return (
            <TopPetition key = {petition.id}
              id={petition.id}
              title={petition.title}
              content={petition.content}
            />);
        })}

      </div>
    </div>
  );
}


