import React from "react";
import "./PetitionCard.scss";
import Dot from "../assets/icons/dot";
import Category from "./Category";

export default function PetitionCard({store, petition: { pid, title, catId, date, description }, categories, agreements, setSelectedPost }) {

    return (
        <button key={pid} className="list-petition" onClick={() => setSelectedPost(pid)}>
            {/*  data processing! */}
            <div className="lp-category">
            <Category filter = {store.getState().category.filter} name={categories.map((category)=>{
            if(catId == category.catId){return category.name;}
          })} />
                <Category filter={-1} name={agreements.length+"명"} />
            </div>
            <div className="lp-title">{title}</div>
            <div className="lp-description" >{description}</div>
            <div className="lp-id-date">
                {pid} <Dot /> {date}
            </div>
        </button>);
}
