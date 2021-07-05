import React, {  useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";
import Post from "../components/Post";
import NavigationTab from "./NavigationTab";
import WritingModal from "../components/WritingModal";


export default function PetitionPage() {

	const [petitions, setPetitions] = useState([]);
	const [comments, setComments] = useState([]);
	const [categories, setCategories] = useState([]);
	const [searchKeyword, setSearchKeyword] = useState("");

	const [filterCategoryState, setFilterCategoryState] = useState(-1);
	const [postingModalState,setPostingModalState] = useState(false) ;
	const [searchState, setSearchState] = useState(true);

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

    const writeComplete = (title, catId, description) => {
        const uid = 1;
        const pid = petitionsSize;
        const post = {pid, uid, title, catId, description};

        let today = new Date();
        const state = 0;
        const date = today.toLocaleDateString();

        axios.post("http://localhost:4000/test",{latestPost: post})
        .then((res)=> {
            console.log(res);
        })
        .catch((err) => console.log(err));
        
        //send the result to the react client
        const newPetition = {pid, uid, title, catId, description, date, state };
		petitions.push(newPetition);
        setPetitions(petitions);

        setPostingModalState(false);
    }
	// const search = ()=> {
	// 	if(searchKeyword !== ""){
	// 		setSearchState(true);
	// 	}
	// 	else{setSearchState(false)};
	// }

	return (
		<div className="petition-home">
			<NavigationTab  filterCategoryState={filterCategoryState} 
							setFilterCategoryState={setFilterCategoryState} 
							openPostingModal={()=>setPostingModalState(true)}
							setSearchKeyword={setSearchKeyword}
							/>

			<div className="petition">
				{selectedPost === -1 ?
					filterCategoryState === -1 ? 
						petitions.map((petition) =>{
							if(petition.title.includes(searchKeyword))
							return  <PetitionCard
									key={petition.pid}
									petition={petition}
									categories={categories}
									setSelectedPost={setSelectedPost}
							/>})
					:
						petitions.map((petition) => {
							if((petition.catId === filterCategoryState) && (petition.title.includes(searchKeyword)))
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
							comments={comments.filter((comment)=>{return (comment.pid === selectedPost)})}
							categories={categories}
							closePost={() => setSelectedPost(-1)} />

				}
			</div>
			{postingModalState && <WritingModal  
												writeComplete={writeComplete}
												closeWritingModal ={()=>setPostingModalState(false)} 
												/>}
		</div>
	);
}
