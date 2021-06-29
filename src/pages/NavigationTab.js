import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavigationTab.scss";
import magnifyingGlass from "../assets/svg/magnifyingGlass.svg"


export default function NavigationTab() {

	return (
		<div className="tab-bg">
			<div className="tab">
				<h1 className="logo-spot">LOGO</h1>
				<div className="search">
					<input className="search-bar" type="text" placeholder="검색..." ></input>
					<button className="search-button"></button>
				</div>
				<div className="filter-buttons">
					<button className="processing1"><p>진행중인 청원<br></br>(최신순)</p></button>
					<button className="processing2"><p>진행중인 청원<br></br>(최신순)</p></button>
					<button className="answered"><p>답변중인 청원<br></br>(최신순)</p></button>
					<button className="expired"><p>진행중인 청원<br></br>(최신순)</p></button>
				</div>
				<div className="filter-categories">
					<button className="academy">학업</button>
					<button className="facility">시설</button>
					<button className="future">미래</button>
					<button className="what">머임</button>
					<button className="welfare">복지</button>
					<button className="administration">행정</button>
					<button className="etc">기타</button>
				</div>
				<button className="petition-write"><p className="text">청원 작성하기</p></button>
			</div>
		</div>
	);
}
