import React from "react";
import "./NavigationTab.scss";
import Logo1 from "../assets/icons/LOGO1"
import LoginForm from "../components/LoginForm";
import LoginnedForm from "../components/LoginnedForm";


export default function NavigationTab(props) {
	const { setFilterCategoryState, filterCategoryState, openPostingModal, 
		setSearchKeyword, search, setOnGoingState, onGoingState, loginComplete, loginned, userMajor, userName, setUserName, setUserMajor
	 }  = props;


	return (
		
			<div className="tab">
				<div className="logo-spot"><Logo1/></div>
				<div className="login-box">{loginned ? <LoginnedForm userMajor={userMajor} userName={userName} loginned={loginned} setUserName={setUserName} setUserMajor={setUserMajor} /> 
													: <LoginForm loginned={loginned} loginComplete={loginComplete}/>}</div>
				<div className="search">
					<input className="search-bar" type="text" placeholder="검색..." onChange={(e)=>setSearchKeyword(e.target.value)}  ></input>
					<button className="search-button" onClick={search}></button>
				</div>
				<div className="filter-buttons">
					<button className={"processing1 " + (onGoingState === 0 ? "buttonSelected" : "")} onClick={() => setOnGoingState(0)}><p>진행중인 청원<br></br>(최신순)</p></button>
					<button className={"processing2 " + (onGoingState === 0 ? "buttonSelected" : "")} onClick={() => setOnGoingState(0)} ><p>진행중인 청원<br></br>(청원순)</p></button>
					<button className={"answered " + (onGoingState === 1 ? "buttonSelected" : "")} onClick={() => setOnGoingState(1)}>답변된 청원</button>
					<button className={"expired " + (onGoingState === 2 ? "buttonSelected" : "")} onClick={() => setOnGoingState(2)}>만료된 청원</button>
				</div>
				<div className="filter-categories">
					<button className={"whole " + (filterCategoryState === -1 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(-1)}>전체</button>
					<button className={"facility " + (filterCategoryState === 0 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(0)}>시설</button>
					<button className={"academy " + (filterCategoryState === 1 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(1)}>학업</button>
					<button className={"welfare " + (filterCategoryState === 2 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(2)}>복지</button>
					<button className={"future " + (filterCategoryState === 3 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(3)}>미래</button>
					<button className={"administration " + (filterCategoryState === 4 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(4)}>행정</button>
					<button className={"etc " + (filterCategoryState === 5 ? "buttonSelected" : "")} onClick={() => setFilterCategoryState(5)}>기타</button>
				</div>
				<button className="petition-write" onClick={openPostingModal}><p className="text">청원 작성하기</p></button>

			</div>
		
	);
}
