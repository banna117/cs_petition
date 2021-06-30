import React, { useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";
import Post from "../components/Post";

export default function PetitionPage() {

	const [petitions, setDB] = useState([]);
	const [selectedPost, setSelectedPost] = useState(-1);

	useEffect(async () => {
		await axios
			.get("/petitions")
			.then((res) => {
				console.log(res.data);
				setDB(res.data);
			})
			.catch();
	}, []);

	return (
		<div className="petition">

			{selectedPost == -1 ?

				petitions.map((petition) =>
					<PetitionCard
						key={petition.pid}
						petition={petition}
						setSelectedPost={setSelectedPost}
					/>
				)
				:
				<Post
					petitionInfo={petitions[selectedPost]}
					closePost={() => setSelectedPost(-1)} />
			}
		</div>
	);
}
