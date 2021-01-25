import React from "react";
import "../Dashboard/dashboard.css";
import LineStadium from "./LineStadium";
import PieStadium from "./PieStadium";
import BarStadium from "./BarStadium";
import { getSummarizedStats } from "../Dashboard/extract";

const Stadiums = (props) => {
	const res = getSummarizedStats(props.team);
	return (
		<div className="stadium">
			<header className="ssp-300 stadium-headline">
				Sachin vs {props.team}
			</header>
			<section className="line-chart-container">
				<LineStadium team={props.team} />
			</section>
			<section className="dual-row">
				<div className="dual-boxes">
					<PieStadium team={props.team} />
				</div>
				<div className="dual-boxes radar">
					<BarStadium team={props.team} />
				</div>
			</section>
			<br />
			<section className="single-insight-cards">
				<div className="details runs ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Runs</span>
					{res.totalRuns}
				</div>
				<div className="details wickets ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Wickets</span>
					{res.totalWickets}
				</div>
				<div className="details catches ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Catches</span>
					{res.totalCatches}
				</div>
			</section>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Stadiums;
