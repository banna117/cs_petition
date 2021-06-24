import React from "react"


export default function TopPetition(props) {
    const { id, title, content} = props;
    return (
        <div key={id} className="top3_format">
            <h1 className="id">{id}</h1>
            <h2 className="title">{title}</h2>
            <h3 className="content">{content}</h3>
        </div>
    );
}
