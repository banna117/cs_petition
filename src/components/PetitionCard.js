import React from "react";
import "./PetitionCard.scss";

export default function PetitionCard(props) {
    const { id, title, date, content } = props;
    return (
    <div key = {id} className="list-petition">
        {/*  data processing! */}
        <div className="lp-category">
            <p className="category">분류</p>
            <p className="agreements">1000명</p>
        </div>
        <div className="lp-title">{title}</div>
        <div className="lp-content">{content}</div>
        <div className="lp-id-date">
            {id} - {date}
        </div>
    </div>);
}
