import React, {  useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";
import Post from "../components/Post";
import NavigationTab from "./NavigationTab";
import WritingModal from "../components/WritingModal";
import io from "socket.io-client"

const URL = "http://localhost:4000/"
const socket = io.connect(URL);

export default function PetitionPage() {
	//data from DB
	const [petitions, setPetitions] = useState([]);
	const [comments, setComments] = useState([]);
	const [categories, setCategories] = useState([]);
	const [agreements, setAgreements] = useState([]);
	const [users, setUsers] = useState([]);

	//검색창에 입력한 스트링값 저장
	// const [searchKeyword, setSearchKeyword] = useState("");
	//상태 변수들
	const [filterCategoryState, setFilterCategoryState] = useState(-1);
	const [postingModalState, setPostingModalState] = useState(false);

	//0: 진행중인 청원(최신순) 3: 진행중인 청원(청원순) 1:답변된 청원 2:만료된 청원
	const [onGoingState, setOnGoingState] = useState(0)
	const [selectedPost, setSelectedPost] = useState(-1);

	const [searchKeyword, setSearchKeyword] = useState("");

	//login 정보
	const [loginned, setLoginned] = useState(false);
	const [currentUser, setCurrentUser] = useState("");


	useEffect(()=>{
		console.log(sessionStorage.getItem('currentUser'));
		//login 한 후 logout을 하지 않았을 때, 정보 유지.
		if(sessionStorage.getItem('currentUser') !== null){
			setCurrentUser(sessionStorage.getItem('currentUser'));
			console.log(sessionStorage.getItem('currentUser'))
			setLoginned(true);
			console.log("must be here")
		}
		else{
			setCurrentUser("");
		}
	},[])


	//navigation 숨기기
	const [hideNav, setHideNav] = useState(false);

	//load petitions Data from DB {pid, uid, title, catId, description, date, state}
	//state 0-ongoing, 1-answered, 2-expired
	useEffect(()=>{	
		async function fetchData2(){
			await axios
			.get("/petitions")
			.then((res) => {
				// console.log(res.data);
				// res.data.sort(
				// 	function(a,b){
				// 		if (a.pid < b.pid) {
				// 			return 1;
				// 		  }
				// 		  if (a.pid > b.pid) {
				// 			return -1;
				// 		  }
				// 		  // a must be equal to b
				// 		  return 0;
				// 	}
				// )
				setPetitions(res.data);
			})
		}
		fetchData2();
	},[]);

	//load comments data from DB {pid, comId, uid, content, date}
	useEffect(()=>{
		async function fetchData(){
			await axios
			.get("/comments")
			.then((res) => {
				// console.log(res.data);
				setComments(res.data);
			})
			.catch();
		}
		fetchData();
	}, []);

	//load category data from DB {catId, name}
	useEffect(()=>{
		async function fetchData4(){
			await axios
			.get("/category")
			.then((res) => {
				// console.log(res.data);
				setCategories(res.data);
			})
			.catch();
		}
		fetchData4();
	}, []);

	//load agreements data from DB {catId, name}
	useEffect(()=>{
		async function fetchData5(){
			await axios
			.get("/agreements")
			.then((res) => {
				// console.log(res.data);
				setAgreements(res.data);
			})
			.catch();
		}
		fetchData5();
	}, []);

	//load agreements data from DB {uid, name, major}
	useEffect(()=>{
		async function fetchData6(){
			await axios
			.get("/users")
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
			})
			.catch();
		}
		fetchData6();
	}, []);

	//handling server request
	useEffect(() => {
		//추가된 petition 받아서 petitions 어레이에 추가하기
		socket.on("addPost", (addingPost) => {
			setPetitions((petitions) => [...petitions, addingPost]);
		})
		//추가된 comment 받아서 comments 어레이에 추가하기
		socket.on("addComment", (addingComment)=>{
			setComments((comments)=>[...comments, addingComment])
		})
		//추가된 agree 받아서 agreements 어레이에 추가하기
		socket.on("addAgree", (addingAgree)=> {
			setAgreements((agreements)=>[...agreements, addingAgree])
		})
		//추가된 user 받아서 users에 추가, currentUser에 설정
		socket.on("addUser", (addingUser)=>{
			setUsers((users)=>[...users, addingUser])
			setCurrentUser(addingUser);
			sessionStorage.setItem('currentUser', currentUser);
			setLoginned(true);
		})

	}, [socket])

	//청원 작성 완료 
    const writeComplete = (title, catId, description) => {
        const uid = currentUser.uid;
        let today = new Date();
        const state = 0;
        const date = today.toLocaleDateString();
		const newPetition = { uid, title, catId, description, date, state };
		
		//서버에 새로 추가된 petition 보내기
		socket.emit("newPost", newPetition);

        setPostingModalState(false);
    }

	//로그인 완료
	const loginComplete = (name, major) => {
		//현재 user 정보에 로그인 정보가 있다면, currentUser에 등록 후 loginned true로 전환
		if (users.some((user) => user.name === name && user.major === major)) {
			setCurrentUser(users.filter((user) => user.name === name && user.major === major)[0]);
			sessionStorage.setItem('currentUser', currentUser);
			setLoginned(true);
			console.log("i am here")
		}
		//현재 user 정보에 로그인 정보가 없다면, server에 알려서 추가하기.
		else {
			socket.emit("newLogin", (name, major));
		}
	}

	//로그아웃 완료
	const logout = ()=> {
		//currentUser 리셋 후 스토리지 데이터 없애기
        setCurrentUser("");
		sessionStorage.removeItem('currentUser');
		setLoginned(false);
	 }

	 //로그인이 필요한 서비스임을 알리기
	const notifyNotLoginned = ()=>{
		setPostingModalState(false);
		alert("로그인이 필요한 서비스입니다.")
	}

	return (
		<div className="petition-home">
			<div className={"petition-left " +(hideNav ? "hide3" : "")}>
				<button className="hide-btn" onClick={()=>{if(hideNav){setHideNav(false)}
															else{setHideNav(true)}}}></button>
				<div className={"petition-nav "+ (hideNav ? "hide1" : "reveal")} >
					{<NavigationTab loginned={loginned}
									loginComplete={loginComplete} 
									filterCategoryState={filterCategoryState} 
									setFilterCategoryState={setFilterCategoryState} 
									openPostingModal={()=>setPostingModalState(true)}
									setSearchKeyword={setSearchKeyword}
									setOnGoingState={setOnGoingState}
									onGoingState={onGoingState}
									currentUser={currentUser}
									logout={logout}
									/>}
				</div>
			</div>
			<div className={"petition " + (hideNav ? "hide2" : "")}>
				<div className="petition-list">
					{selectedPost === -1 ?
						filterCategoryState === -1 ? 
							petitions.map((petition) =>{
								if(petition.title.includes(searchKeyword) && onGoingState === petition.state)
								return  <PetitionCard
										key={petition.pid}
										petition={petition}
										categories={categories}
										setSelectedPost={setSelectedPost}
										agreements = {agreements.filter(agreement=>agreement.pid === petition.pid)}
										filterCategoryState={filterCategoryState}
										
								/>})
						:
							petitions.map((petition) => {
								if((petition.catId === filterCategoryState) && (petition.title.includes(searchKeyword)) && onGoingState === petition.state)
								return <PetitionCard
											key={petition.pid}
											petition={petition}
											categories={categories}
											setSelectedPost={setSelectedPost}
											agreements = {agreements.filter(agreement=>agreement.pid === petition.pid)}
											filterCategoryState={filterCategoryState}
										/>
								})
					:								
						<Post
								petitionInfo={petitions[selectedPost]}
								comments={comments.filter(comment=>comment.pid === selectedPost)}
								categories={categories}
								closePost={() => setSelectedPost(-1)} 
								socket={socket}
								agreements = {agreements.filter(agreement=>agreement.pid === selectedPost)}
								loginned={loginned}
								user = {users.filter((user) => user.uid === petitions[selectedPost].uid)}
								currentUser={currentUser}
								
								/>

					}
				</div>
			</div>
			{loginned ? postingModalState && <WritingModal  
												writeComplete={writeComplete}
												closeWritingModal ={()=>setPostingModalState(false)} 
												/> : postingModalState && notifyNotLoginned()}
		</div>
	);
}
