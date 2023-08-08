// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";

const Destination = () => {
	const [destinationPlanets, setDestinationPlanets] = useState([]);
	const [selectedPlanet, setSelectedPlanet] = useState({});

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("/data.json");
			const data = await res.json();
			setDestinationPlanets(data.destinations);
			setSelectedPlanet(data.destinations[0]);
		};
		return () => loadData();
	}, []);

	const selectPlanetEvent = (e) => {
		setSelectedPlanet(
			destinationPlanets.find((planet) => planet.name === e.target.name)
		);
	};

	return (
		<div className="destination">
			<div className="container">
				<h3 className="page-subtitle subtitle">
					<span>01</span> Pick your destination
				</h3>
				<div className="planets">
					<div className="planets-img">
						<img
							src={selectedPlanet?.images?.png}
							alt="destination planet image"
						/>
					</div>
					<div className="planet-details-container">
						<ul className="planet-btn-container">
							<li>
								<button
									name="Moon"
									onClick={selectPlanetEvent}
									className={`planet-btn ${
										selectedPlanet.name === "Moon" &&
										"active-btn"
									}`}
								>
									Moon
								</button>
							</li>
							<li>
								<button
									name="Mars"
									onClick={selectPlanetEvent}
									className={`planet-btn ${
										selectedPlanet.name === "Mars" &&
										"active-btn"
									}`}
								>
									Mars
								</button>
							</li>
							<li>
								<button
									name="Europa"
									onClick={selectPlanetEvent}
									className={`planet-btn ${
										selectedPlanet.name === "Europa" &&
										"active-btn"
									}`}
								>
									Europa
								</button>
							</li>
							<li>
								<button
									name="Titan"
									onClick={selectPlanetEvent}
									className={`planet-btn ${
										selectedPlanet.name === "Titan" &&
										"active-btn"
									}`}
								>
									Titan
								</button>
							</li>
						</ul>
						<div className="planet-details">
							<h2 className="planet-name">
								{selectedPlanet.name}
							</h2>
							<p className="planet-description text">
								{selectedPlanet?.description}
							</p>
							<div className="planet-distance-and-travel-time-container">
								<div className="planet-distance-container">
									<p>avg. distance</p>
									<p className="planet-distance">
										{selectedPlanet?.distance}
									</p>
								</div>
								<div className="planet-travel-time-container">
									<p>avg. distance</p>
									<p className="planet-travel-time">
										{selectedPlanet?.travel}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
