// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Crew = () => {
	const [crew, setCrew] = useState([]);
	const [selectedCrew, setSelectedCrew] = useState({});

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("/data.json");
			const data = await res.json();
			setCrew(data.crew);
			setSelectedCrew(data.crew[0]);
		};
		return () => loadData();
	}, []);

	const selectCrewEvent = (e) => {
		setSelectedCrew(
			crew.find((singleCrew) => singleCrew.name === e.target.name)
		);
	};

	return (
		<div className="crew">
			<div className="container">
				<h3 className="page-subtitle subtitle">
					<span>02</span> Meet your crew
				</h3>
				<div className="single-crew">
					<div className="crew-details-container">
						<div className="crew-details">
							<p className="crew-role">{selectedCrew?.role}</p>
							<h2 className="crew-name">{selectedCrew?.name}</h2>
							<p className="crew-bio text">{selectedCrew?.bio}</p>
						</div>
						<ul className="crew-btn-container">
							<li>
								<button
									onClick={selectCrewEvent}
									className={`crew-btn ${
										selectedCrew.name ===
											"Douglas Hurley" &&
										"active-crew-btn"
									}`}
									name="Douglas Hurley"
								/>
							</li>
							<li>
								<button
									onClick={selectCrewEvent}
									className={`crew-btn ${
										selectedCrew.name ===
											"Mark Shutlewoth" &&
										"active-crew-btn"
									}`}
									name="Mark Shutlewoth"
								/>
							</li>
							<li>
								<button
									onClick={selectCrewEvent}
									className={`crew-btn ${
										selectedCrew.name === "Victor Glover" &&
										"active-crew-btn"
									}`}
									name="Victor Glover"
								/>
							</li>
							<li>
								<button
									onClick={selectCrewEvent}
									className={`crew-btn ${
										selectedCrew.name ===
											"Anousheh Ansari" &&
										"active-crew-btn"
									}`}
									name="Anousheh Ansari"
								/>
							</li>
						</ul>
					</div>
					<div className="crew-img-container">
						<img src={selectedCrew?.images?.png} alt="crew image" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Crew;
