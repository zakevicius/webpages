import React from "react";

class RepoItem extends React.Component {
	constructor(props) {
		super(props);
		this.repoRef = React.createRef();
	}

	state = {
		languages: {}
	};

	componentDidMount() {
		if (this.props.repo) {
			this.fetchLanguages();
		}
	}

	fetchLanguages = async () => {
		const res = await fetch(this.props.repo.languages_url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization:
					"9b0c5a4499841fbb9f67:381da67a31cce792dc84c3bc6768876cc23ebf31"
			}
		});
		const languages = await res.json();
		this.setState({ languages: { ...this.state.languages, ...languages } });

		this.setStyle();
	};

	setStyle() {
		let time = 1 + 0.2 * this.props.index;

		this.repoRef.current.style.transition = `right ${time}s, left ${time}s, opacity ${time +
			0.5}s`;

		if (this.repoRef.current.classList.contains("left")) {
			this.repoRef.current.style.left = "0px";
		}

		if (this.repoRef.current.classList.contains("right")) {
			this.repoRef.current.style.right = "0px";
		}

		this.repoRef.current.style.opacity = 1;
	}

	renderLanguages = () => {
		const languages = [];

		for (let lang in this.state.languages) {
			languages.push(
				<div key={lang}>
					<div
						className={`repo-language-color ${lang
							.toLowerCase()
							.replace("#", "sharp")}`}
					></div>
					{lang}
				</div>
			);
		}
		return languages.map(lang => lang);
	};

	render() {
		const repo = this.props.repo;
		const languages = this.state.languages;

		return (
			<div className={`repo ${this.props.class}`} ref={this.repoRef}>
				<h3>
					<a href={repo.html_url} target="_blank" rel="noreferrer noopener">
						{repo.name}
					</a>
				</h3>
				<p>{repo.description}</p>
				<div className="repo-languages">
					{languages ? this.renderLanguages() : ""}
				</div>
			</div>
		);
	}
}

export default RepoItem;
