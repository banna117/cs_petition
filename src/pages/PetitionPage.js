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
  const [modalOn, setModalOn] = useState(false);

  const onOpenModal = () => {
    setModalOn(!modalOn);
  }
  function WriteModal(props) {
    const { message } = props.message;

    return (
      <div className="petition-write-modal">
        <div className="bg"></div>
        <div className="modal-box">
          <input className="title" type="text" placeholder="제목"></input>
          <textarea className="content" type="text" placeholder="청원 내용" ></textarea>
        </div>
        <button className="close-button" onClick={onOpenModal}>X</button>
      </div>
    );
  };

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
        <React.Fragment>
          <button className="write" onClick={onOpenModal}>작성하기</button>
          {console.log({modalOn})}
          {modalOn ? <WriteModal message = "i am here"/> : ''}
        </React.Fragment>

      </div>
      <div className="petitionlist">
         {/* to show only 4 items per menu */}
         
        {petitions.map((petition) => {
           console.log(petition);
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
