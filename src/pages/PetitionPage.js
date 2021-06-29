import React, { useEffect, useState } from "react";
import "./PetitionPage.scss";
import PetitionCard from "../components/PetitionCard";
import axios from "axios";

export default function PetitionPage() {

	const [petitions, setDB] = useState([]);

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
			{petitions.map((petition) =>
				<PetitionCard
					key={petition.pid}
					petition={petition}
				/>
			)}

		</div>
	);
}
