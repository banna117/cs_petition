import React, {  useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";
import Post from "../components/Post";
import NavigationTab from "./NavigationTab";
import WritingModal from "../components/WritingModal";

export default function PetitionPage() {

	let [petitions, setPetitions] = useState([]);
	let [comments, setComments] = useState([]);
	let [commentPid, setCommentPid] = useState([]);
	let [petitionCat, setPetitionCat] = useState([]);

	const [filterCategoryState, setFilterCategoryState] = useState(-1);
	const [postingModalState,setPostingModalState] = useState(false) ;

	const [petitionsSize, setPetitionsSize] = useState(0); //to keep track of the petitions size

	const [selectedPost, setSelectedPost] = useState(-1);



	useEffect(()=>{	
		async function fetchData2(){
			await axios
			.get("/petitions")
			.then((res) => {
				console.log(res.data);
				setPetitions(res.data);
			})
		}
		fetchData2();
	},[]);

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

	useEffect(()=>{
		let temp = [];
		for(var i=0; i<petitions.length;i++){
			temp.push([])
		}
		for(var i=0; i<comments.length; i++){
			temp[comments[i].pid].push(comments[i]);
		}
		setCommentPid(temp);
		console.log(commentPid)
	},[comments, setComments,setCommentPid]) 

	useEffect(()=>{
		let temp = [];
		for (var i = 0; i < 6; i++) { temp.push([]); }
		for (i = 0; i < petitions.length; i++) { temp[petitions[i].catId].push(petitions[i]); }
		setPetitionCat(temp);
		
		console.log(petitionCat)
		console.log(petitions)
	}, [petitions, setPetitions, setPetitionCat])

	return (
		<div className="petition-home">

			<NavigationTab  filterCategoryState={filterCategoryState} 
							setFilterCategoryState={setFilterCategoryState} 
							openPostingModal={()=>setPostingModalState(true)}/>

			<div className="petition">
				{selectedPost === -1 ?
					((filterCategoryState === -1) ? (
						petitions.map((petition) =>
							<PetitionCard
								key={petition.pid}
								petition={petition}
								setSelectedPost={setSelectedPost}
							/>
						))
						:
						petitionCat[filterCategoryState].map((petition) =>
							<PetitionCard
								key={petition.pid}
								petition={petition}
								setSelectedPost={setSelectedPost}
							/>
						))
					:
					<Post
						petitionInfo={petitions[selectedPost]}
						commentInfo={commentPid[selectedPost]}
						closePost={() => setSelectedPost(-1)} />
				}
			</div>
			{postingModalState && <WritingModal  
												petitions={petitions} 
												setPetitions={setPetitions} 
												petitionCat = {petitionCat}
												setPetitionCat={setPetitionCat}
												commentPid
												petitionsSize={petitionsSize} 
												setPetitionsSize={setPetitionsSize}  
												closeWritingModal = {()=>setPostingModalState(false)}/>}
		</div>
	);
}
