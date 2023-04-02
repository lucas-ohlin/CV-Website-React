import React, { useState, useEffect, useRef} from "react";
import axios from "axios";

import '../css/contact-about.css'

//Components import
import RepoData from "../components/RepoData";

function Portfolio() {

	//Sets this to array by default
	const [repoData, setRepoData] = useState([]);
	const [userData, setUserData] = useState();

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {


		axios.get("https://api.github.com/users/lucas-ohlin")
			.then((res) => {
				
				console.log(res);
				setUserData(res.data);

				axios.get("https://api.github.com/users/lucas-ohlin/repos")
					.then((res) => {

						console.log(res);
						setRepoData(res.data);
						setIsLoaded(true);

					})
					.catch((err) => {
						console.log('Error: ', err)
					})

			})
			.catch((err) => {
				console.log('Error: ', err);
			}) 

	}, []);

	//Incase it isn't loaded display this
	if (!isLoaded) {
		return (
			<>
			<div className="portfolio-container" >
				<div className="github-container">
					<p>Loading...</p>
				</div>
			</div>
			</>
		)
	}
	else {
		return (
			<>
			<div className="portfolio-container" >
				<div className="github-container">
					{repoData.map(repo => 
						<RepoData {...repo} login={userData.login} avatar_url={userData.avatar_url} user_url={userData.html_url} />
					)}
				</div>
			</div>
			</>
		);
	}
}

export default Portfolio;
