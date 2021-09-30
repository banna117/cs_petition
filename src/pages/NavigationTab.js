import React from "react";
import "./NavigationTab.scss";
import Logo1 from "../assets/icons/LOGO1"
import LoginForm from "../components/LoginForm";
import LoginnedForm from "../components/LoginnedForm";
import { modifyCategory } from "../features/category/categorySlice";
import { setLoginned } from "../features/login/loginnedSlice";

export default function NavigationTab(props) {
	const { store, openPostingModal, 
		setSearchKeyword, search, setOnGoingState, onGoingState, socket, users
	}  = props;

	const changeCategory = (filterNum) => {
		store.dispatch(modifyCategory(filterNum));
	}

	//로그인 완료
	const loginComplete = (name, major) => {
		//현재 user 정보에 로그인 정보가 있다면, currentUser에 등록 후 loginned true로 전환
		if (users.some((user) => user.name === name && user.major === major)) {
			sessionStorage.setItem('user_uid', users.filter((user) => user.name === name && user.major === major)[0].uid);
			sessionStorage.setItem('user_name', name);
			sessionStorage.setItem('user_major', major);
			// store.dispatch({type:loginned, payload:{loginned:true, currentUser: users.filter((user) => user.name === name && user.major === major)[0]}});
			store.dispatch(setLoginned({loginned:true, currentUser: users.filter((user) => user.name === name && user.major === major)[0]}));
		}
		//현재 user 정보에 로그인 정보가 없다면, server에 알려서 추가하기.
		else {
			socket.emit("newLogin", {name, major});
		}
	}
	return (

			<div className="tab">
				<div className="logo-spot"><Logo1/></div>
				<div className="login-box">{store.getState().loginned.loginned ? <LoginnedForm store={store} /> 
													: <LoginForm loginComplete={loginComplete}/>}</div>
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
					<button className={"whole " + (store.getState().category.filter === -1 ? "buttonSelected" : "")} onClick={()=>changeCategory(-1)}>전체</button>
					<button className={"facility " + (store.getState().category.filter === 0 ? "buttonSelected" : "")} onClick={()=>changeCategory(0)}>시설</button>
					<button className={"academy " + (store.getState().category.filter === 1 ? "buttonSelected" : "")} onClick={() => changeCategory(1)}>학업</button>
					<button className={"welfare " + (store.getState().category.filter === 2 ? "buttonSelected" : "")} onClick={() => changeCategory(2)}>복지</button>
					<button className={"future " + (store.getState().category.filter === 3 ? "buttonSelected" : "")} onClick={() => changeCategory(3)}>미래</button>
					<button className={"administration " + (store.getState().category.filter === 4 ? "buttonSelected" : "")} onClick={() => changeCategory(4)}>행정</button>
					<button className={"etc " + (store.getState().category.filter === 5 ? "buttonSelected" : "")} onClick={() => changeCategory(5)}>기타</button>
				</div>
				<button className="petition-write" onClick={openPostingModal}><p className="text">청원 작성하기</p></button>
			</div>
		
	);
}
