import React, { useEffect } from "react";
import faker from "faker";
import me from "../../../assets/img/me.jpg";
import "./about.css";

const About = () => {
	useEffect(() => {}, []);

	let sentences = new Array(8).fill("");
	return (
		<div className="middle-X">
			<img src={me} className="about-img" />
			<div className="about-personal-info">
				<h3>
					{faker.name.firstName()} {faker.name.lastName()}
				</h3>
				<h4>{faker.random.words(2)}</h4>
			</div>
			<div className="about-more">
				{sentences.map((s, i) => (
					<p key={i}>{faker.lorem.sentence()}</p>
				))}
			</div>
		</div>
	);
};

export default About;
