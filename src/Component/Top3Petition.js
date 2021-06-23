import React from "react"

const petitions = [
    {
        id : 'minsoo1',
        title : "학교 설비를 바꿔주세요.",
        content : "Do you agree?"
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
function Top3Petition() {
    return petitions.map((petition) => {
        return (
        <div key={petition.id} className="top_format">
            <h1 className="top_id">{petition.id}</h1>
            <h2 className="top_title">{petition.title}</h2>
            <h3 className="top_content">{petition.content}</h3>
        </div>);
    })
}
export default Top3Petition;