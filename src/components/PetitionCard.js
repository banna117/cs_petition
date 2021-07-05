import React from "react";
import "./PetitionCard.scss";
import Dot from "../assets/icons/dot";
import Category from "./Category";

export default function PetitionCard({ petition: { pid, title, catId, date, description }, categories, setSelectedPost }) {
    return (
        <button key={pid} className="list-petition" onClick={() => setSelectedPost(pid)}>
            {/*  data processing! */}
            <div className="lp-category">
            <Category name={categories.map((category)=>{
            if(catId == category.catId){return category.name;}
          })} />
                <Category name="1,000명" />
            </div>
            <div className="lp-title">{title}</div>
            <div className="lp-description" >{description}</div>
            <div className="lp-id-date">
                {pid} <Dot /> {date}
            </div>
        </button>);
}
