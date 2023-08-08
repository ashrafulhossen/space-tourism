// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="home">
			<div className="container">
				<div className="home-banner">
					<p className="home-banner-subtitle subtitle">
						So, you want to travel to
					</p>
					<h2 className="home-banner-title">space</h2>
					<p className="home-banner-text text">
						Let's face it; If you want to go to space, you might as
						well genuinely go to outer space and not hove kind of on
						the edge on it. Well sit back and relax because we will
						give you a truly out of this world experience.
					</p>
				</div>
				<Link className="explore-btn" to={"/destination"}>
					explore
				</Link>
			</div>
		</section>
	);
};

export default Home;
