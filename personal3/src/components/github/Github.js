import React, { Fragment } from "react";
import User from "./User";
import Loader from "../elements/Loader";

class Github extends React.Component {
	state = {
		user: "",
		repos: [],
		loadingUser: 1,
		loadingRepos: 1
	};

	componentDidMount() {
		this.fetchUser();
		this.fetchRepos();
	}

	fetchUser = async () => {
		const res = await fetch(`https://api.github.com/users/zakevicius`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization:
					"9b0c5a4499841fbb9f67:381da67a31cce792dc84c3bc6768876cc23ebf31"
			}
		});
		const user = await res.json();
		this.setState({ user, loadingUser: 0 });
	};

	fetchRepos = async () => {
		const res = await fetch(`https://api.github.com/users/zakevicius/repos`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization:
					"9b0c5a4499841fbb9f67:381da67a31cce792dc84c3bc6768876cc23ebf31"
			}
		});
		const repos = await res.json();
		this.setState({ repos, loadingRepos: 0 });
	};

	onClickExpand = () => {
		const github = document.getElementById("github");
		github.classList.toggle("expand");
		if (this.state.expanded) {
			this.setState({ expanded: false });
		} else {
			this.setState({ expanded: true });
		}
	};

	render() {
		const { user, repos, loadingRepos, loadingUser } = this.state;
		return (
			<div
				id="github"
				className={`github ${
					loadingUser || loadingRepos ? "loading" : ""
				} section`}
			>
				{loadingUser || loadingRepos ? (
					<Loader />
				) : (
					<Fragment>
						<User
							user={user}
							repos={repos}
							loading={[loadingRepos, loadingUser]}
						></User>
						<div className="github-expand">
							<div
								className="github-expand-button"
								onClick={this.onClickExpand}
							>
								<i
									className={`fas fa-angle-double-${
										this.state.expanded ? "up" : "down"
									} fa-2x`}
								/>
							</div>
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}

export default Github;
