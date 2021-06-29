import React, { useEffect, useState } from "react";
import "./NavigationTab.scss";
import WritingModal from "../components/WritingModal";


export default function NavigationTab() {
	let [filterButtonState, setFilterButtonState] = useState(0);
	let [filterCategoryState, setFilterCategoryState] = useState(-1);

	let [writingModalState,setWritingModalState] = useState(false) ;

	const closeWritingModal = () => {
		setWritingModalState(false);
	};
	const alterWritingModal = () => {
		setWritingModalState(!writingModalState);
	}

	useEffect(() => {
		
		console.log(writingModalState);
	})

	return (
		<div className="tab-bg">
			<div className="tab">
				<h1 className="logo-spot">LOGO</h1>
				<div className="search">
					<input className="search-bar" type="text" placeholder="검색..." ></input>
					<button className="search-button"></button>
				</div>
				<div className="filter-buttons">
					<button className={"processing1 " + (filterButtonState === 0 ? "buttonSelected" : "")} onClick={() => setFilterButtonState(0)}><p>진행중인 청원<br></br>(최신순)</p></button>
					<button className={"processing2 " + (filterButtonState === 1 ? "buttonSelected" : "")} onClick={() => setFilterButtonState(1)} ><p>진행중인 청원<br></br>(최신순)</p></button>
					<button className={"answered " + (filterButtonState === 2 ? "buttonSelected" : "")} onClick={() => setFilterButtonState(2)}>답변된 청원</button>
					<button className={"expired " + (filterButtonState === 3 ? "buttonSelected" : "")} onClick={() => setFilterButtonState(3)}>만료된 청원</button>
				</div>
				<div className="filter-categories">
					<button className={"academy " + (filterCategoryState === 0 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(0)}>학업</button>
					<button className={"facility " + (filterCategoryState === 1 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(1)}>시설</button>
					<button className={"future " + (filterCategoryState === 2 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(2)}>미래</button>
					<button className={"what " + (filterCategoryState === 3 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(3)}>머임</button>
					<button className={"welfare " + (filterCategoryState === 4 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(4)}>복지</button>
					<button className={"administration " + (filterCategoryState === 5 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(5)}>행정</button>
					<button className={"etc " + (filterCategoryState === 6 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(6)}>기타</button>
				</div>
				<button className="petition-write" onClick={alterWritingModal}><p className="text">청원 작성하기</p></button>
				{writingModalState && <WritingModal closeWritingModal = {closeWritingModal}/>}

			</div>
		</div>
	);
}
