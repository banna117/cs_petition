import React from "react";
import "./PetitionCard.scss";
import Dot from "../assets/icons/dot";

export default function PetitionCard(props) {
    const { id, title, date, content } = props;
    return (
    <button key = {id} className="list-petition">
        {/*  data processing! */}
        <div className="lp-category">
            <p className="category">분류</p>
            <p className="agreements">1000000명</p>
        </div>
        <div className="lp-title">{title}</div>
        <div className="lp-content">{content}</div>
        <div className="lp-id-date">
            {id} <Dot/> {date}
        </div>
    </button>);
}
