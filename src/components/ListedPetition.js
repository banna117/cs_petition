import React from "react";

export default function ListedPetition(props) {
    const { id, title, date } = props;
    return <div key = {id}className="list-petition">
        <div className="lp-title">{title}</div>
        <div className="lp-date">{date}</div>
    </div>;
}
