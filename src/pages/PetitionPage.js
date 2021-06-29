import React, { useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";


const petitions = [
    {
        id: 'minsoo1',
        title: "학교 설비를 바꿔주세요.  부탁드립니다 사감선생님. 줄이 바뀌면 어떻게 보일까요?????/",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    },
    {
        id: 'minsoo2',
        title: "학교 설비를 바꿔주세요.",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    },
    {
        id: 'minsoo3',
        title: "학교 설비를 바꿔주세요.",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    },
    {
        id: 'minsoo4',
        title: "학교 설비를 바꿔주세요.",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 난 너를 믿었던 만큼 난아니 줄이 얼마나 길어야되는거야 내 친구도ㅛ 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    },
    {
        id: 'minsoo5',
        title: "학교 설비를 바꿔주세요.",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    },
    {
        id: 'minsoo6',
        title: "학교 설비를 바꿔주세요.",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    },
    {
        id: 'minsoo7',
        title: "학교 설비를 바꿔주세요.",
        content: "나의 사랑이 멀어지네 나의 어제는 사라지네 태양을 따라 도는 저 별들처럼 난 돌고 돌고 돌고 그대를 향한 나의 이 어리석은 사랑해 사랑해 사랑해 머물지 못 하는 내 두 누누에 고인 눈물이 흐르네 나의 사랑ㅇㄴ 어떠나가쎄.",
        date: "2021.06.13"
    }
]
export default function PetitionPage( ){
    const [modalOn, setModalOn] = useState(false);
    //need to be fixed
    let [petitionsFromDB, setDB] = useState([]);

    let count = 0;
    
    //need to be fixed
    useEffect(async() => {
        await axios
          .get("/api/products")
          .then((res) => {setDB(res.data.products);})
          .catch();
      });


    const onOpenModal = () => {
        setModalOn(!modalOn);
    }
    function resetCount() {
        count = 0;
    }
    function WriteModal() {
        
        return (
            <div className="petition-write-modal">
                <div className="bg"></div>
                <div className="modal-box">
                    <input className="title" type="text" placeholder="제목"></input>
                    <textarea className="content" type="text" placeholder="청원 내용" ></textarea>
                    <button className="close-button" onClick={onOpenModal}>X</button>
                </div>
            </div>
        );
    };

    return (
        <div className="petition">

            {petitionsFromDB.map((petition) => {
                return (
                    <PetitionCard
                        key={petition.id}
                        id={petition.id}
                        title={petition.title}
                        date={petition.date}
                        content={petition.content}
                    />
                );

            })}

        </div>
    );
}
