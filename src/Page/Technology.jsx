// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Technology = () => {
	const [technology, setTechnology] = useState([]);
	const [selectedTechnology, setSelectedTechnology] = useState({});

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("/data.json");
			const data = await res.json();
			setTechnology(data.technology);
			setSelectedTechnology(data.technology[0]);
		};
		return () => loadData();
	}, []);

	const selectTechnologyEvent = (e) => {
		setSelectedTechnology(
			technology.find(
				(singleTechnology) => singleTechnology.name === e.target.name
			)
		);
	};

	return (
		<div className="technology">
			<div className="container">
				<h3 className="page-subtitle subtitle">
					<span>03</span> Space launch 101
				</h3>
				<div className="technology-container">
					<div className="technology-details-container">
						<ul className="technology-btn-container">
							<li>
								<button
									className={`technology-btn ${
										selectedTechnology.name ===
											"Launch vehicle" &&
										"active-technology-btn"
									}`}
									onClick={selectTechnologyEvent}
									name="Launch vehicle"
								>
									1
								</button>
							</li>
							<li>
								<button
									className={`technology-btn ${
										selectedTechnology.name ===
											"Spaceport" &&
										"active-technology-btn"
									}`}
									onClick={selectTechnologyEvent}
									name="Spaceport"
								>
									2
								</button>
							</li>
							<li>
								<button
									className={`technology-btn ${
										selectedTechnology.name ===
											"Space capsule" &&
										"active-technology-btn"
									}`}
									onClick={selectTechnologyEvent}
									name="Space capsule"
								>
									3
								</button>
							</li>
						</ul>
						<div className="technology-details">
							<p className="technology-text">The Terminology ...</p>
							<h2 className="technology-name">
								{selectedTechnology?.name}
							</h2>
							<p className="technology-description text">
								{selectedTechnology?.description}
							</p>
						</div>
					</div>
					<div className="technology-img-container">
						<img
							src={selectedTechnology?.images?.portrait}
							alt="technology image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;
