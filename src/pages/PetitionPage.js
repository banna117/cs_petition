import React, {  useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";
import Post from "../components/Post";

export default function PetitionPage(props) {

	const [petitions, setPetitions] = useState([]);
	const [comments, setComments] = useState([]);
	const [commentPid, setCommentPid] = useState([]);
	const [petitionCat, setPetitionCat] = useState([]);

	const {filterCategoryState} = props;
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
		const remakeComments=()=>{
			let temp = [];
			for (var i = 0, j = -1; i < comments.length; i++) {
				// console.log("i am here");
				if (j !== comments[i].pid) {
	
					j = comments[i].pid;
					temp[j] = [];
				}
				temp[comments[i].pid].push(comments[i]);
	
			}
			setCommentPid(temp);

		}
		remakeComments();
	}, [comments])



	useEffect(()=>{
		const remakePetitions=()=>{
			let temp = [];
			for(var i=0;i<6;i++){
				temp.push([]);
			}
			
			for (i = 0; i < petitions.length; i++) {
				
				temp[petitions[i].catId].push(petitions[i]);
			}
			setPetitionCat(temp);

		}
		remakePetitions();

	}, [petitions])

	return (
		
		<div className="petition">

			{selectedPost === -1 ?
				((filterCategoryState == -1) ? (
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
	);
}
