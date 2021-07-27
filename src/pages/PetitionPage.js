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
	const [petitionsSize, setPetitionsSize] = useState(0); //to keep track of the petitions size

	//검색창에 입력한 스트링값 저장
	const [searchKeyword, setSearchKeyword] = useState("");

	const [filterCategoryState, setFilterCategoryState] = useState(-1);
	const [postingModalState, setPostingModalState] = useState(false);

	//0: 진행중인 청원(최신순) 3: 진행중인 청원(청원순) 1:답변된 청원 2:만료된 청원
	const [onGoingState, setOnGoingState] = useState(0)

	const [selectedPost, setSelectedPost] = useState(-1);

	//load petitions Data from DB {pid, uid, title, catId, description, date, state}
	//state 0-ongoing, 1-answered, 2-expired
	useEffect(()=>{	
		async function fetchData2(){
			await axios
			.get("/petitions")
			.then((res) => {
				console.log(res.data);
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

	//load petitions' size from DB 
	useEffect(()=>{
		async function fetchData3(){
			await axios
			.get("/petitions/size")
			.then((res) => {
				console.log(res.data);
				setPetitionsSize(res.data[0].size);
			})
		}
		fetchData3();
	},[]);

	//load comments data from DB {pid, comId, uid, content, date}
	useEffect(()=>{
		async function fetchData(){
			await axios
			.get("/comments")
			.then((res) => {
				console.log(res.data);
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
				console.log(res.data);
				setCategories(res.data);
			})
			.catch();
		}
		fetchData4();
	}, []);

	useEffect(() => {
		//추가된 petition 받아서 petitions 어레이에 추가하기
		socket.on("addPost", (addingPost) => {
			setPetitions((petitions) => [...petitions, addingPost]);
		})
	}, [socket])

    const writeComplete = (title, catId, description) => {
        const uid = 1;
        const pid = petitions.length;
        let today = new Date();
        const state = 0;
        const date = today.toLocaleDateString();
		const newPetition = {pid, uid, title, catId, description, date, state };
		
		//서버에 새로 추가된 petition 보내기
		socket.emit("newPost", newPetition);
        
		console.log("i am here")
		setPetitionsSize(petitionsSize+1);
        setPostingModalState(false);
    }
	const addNewComment = (obj) => {
		setComments((comments) => [...comments, obj])
	}
	console.log(comments)
	console.log(selectedPost)

	return (
		<div className="petition-home">
			<div className="petition-nav">
				<NavigationTab  filterCategoryState={filterCategoryState} 
								setFilterCategoryState={setFilterCategoryState} 
								openPostingModal={()=>setPostingModalState(true)}
								setSearchKeyword={setSearchKeyword}
								setOnGoingState={setOnGoingState}
								onGoingState={onGoingState}
								socket={socket}
								/>
			</div>
			<div className="petition">
				{selectedPost === -1 ?
					filterCategoryState === -1 ? 
						
						petitions.map((petition) =>{
							if(petition.title.includes(searchKeyword) && onGoingState === petition.state)
							return  <PetitionCard
									key={petition.pid}
									petition={petition}
									categories={categories}
									setSelectedPost={setSelectedPost}
							/>})
					:
						petitions.map((petition) => {
							if((petition.catId === filterCategoryState) && (petition.title.includes(searchKeyword)) && onGoingState === petition.state)
							return <PetitionCard
										key={petition.pid}
										petition={petition}
										categories={categories}
										setSelectedPost={setSelectedPost}
									/>
							})
				:								
					<Post
							petitionInfo={petitions[selectedPost]}
							comments={comments.filter(comment=>comment.pid === selectedPost)}
							categories={categories}
							closePost={() => setSelectedPost(-1)} 
							socket={socket}
							addNewComment={addNewComment}/>

				}
			</div>
			{postingModalState && <WritingModal  
												writeComplete={writeComplete}
												closeWritingModal ={()=>setPostingModalState(false)} 
												/>}
		</div>
	);
}
