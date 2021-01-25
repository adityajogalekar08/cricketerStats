import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Teams from "../Teams/Teams";
import Stadiums from "../Stadiums/Stadium";

library.add(faChevronLeft);
export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTeam: "Australia",
		};
		this.setTeam = this.setTeam.bind(this);
	}

	setTeam(data) {
		this.setState({
			selectedTeam: data.currentTarget.dataset.id,
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className="dashboard-placeholder ssp-300">
					To view dashboard switch to larger device
				</div>
				<div className="dashboard-container">
					<div className="sidebar-add">
						<Link to="/" style={{ textDecoration: "none", color: "white" }}>
							<div className="back-arrow">
								<FontAwesomeIcon icon="chevron-left" />
							</div>
						</Link>
					</div>

					<div className="teams-container">
						<header className="team-headline ssp-300">Teams</header>
						<Teams
							activeTeam={this.state.selectedTeam}
							changeTeamContext={this.setTeam}
						/>
					</div>

					<Stadiums team={this.state.selectedTeam} />
				</div>
			</React.Fragment>
		);
	}
}
