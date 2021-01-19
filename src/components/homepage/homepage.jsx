import React from "react";
import Fade from "react-reveal";
import "./homepage.css";

const HomePage = () => {
	return (
		<section className="homesection">
			<div className="content">
				<Fade bottom delay={1000}>
					<span className="pd-700 name">Sachin Tendulkar</span>
				</Fade>
				<Fade bottom delay={8000}>
					<p>
						Do your crime when sachin is batting, even God is busy watching him
						play. <br />- <i>Australian Fan</i>
					</p>
				</Fade>
			</div>
			{/* <div className="homeborder" /> */}
		</section>
	);
};
export default HomePage;
