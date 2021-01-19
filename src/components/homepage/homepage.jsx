import React from "react";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
	return (
		<section className="homesection">
			<div className="content">
				<Fade bottom delay={1000}>
					<span className="pd-700 title">Sachin Tendulkar</span>
				</Fade>
				<Fade bottom delay={8000}>
					<p>
						Do your crime when sachin is batting, even God is busy watching him
						play. <br />- <i>Australian Fan</i>
					</p>
				</Fade>
			</div>
			{/* <div className="homeborder" /> */}
			<Fade bottom delay={10000}>
				<div className="wrapper">
					<div className="stats">Career Batting Stats</div>
					<div className="Teststats">Test: 1989–13</div>
					<div className="RunsTeststats">Runs: 15921</div>
					<div className="ODIstats">ODI: 1989-12</div>
					<div className="RunsODIstats">Runs:18426</div>
				</div>
			</Fade>
			<br />
			<br />
			<br />
			<div>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Fade bottom delay={10000}>
						<button className="dashboard-button">Stat Page</button>
					</Fade>
				</Link>
			</div>
		</section>
	);
};
export default HomePage;
