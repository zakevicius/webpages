import React, { Component } from "react";
import Repos from "./Repos";
import Button from "../elements/Button";

class User extends Component {
	render() {
		const { name, avatar_url, location, login, html_url } = this.props.user;
		const { repos, user, loading } = this.props;

		return (
			<div className="github-user">
				<div className="github-user-info">
					<div>
						<img src={avatar_url} className="github-avatar" alt="avatar" />
						<h1>{name}</h1>
						<h3>{login}</h3>
					</div>
					<div>
						<a
							href={html_url}
							className="btn btn-dark my-1"
							rel="noreferrer noopener"
							target="_blank"
						>
							<Button additionalClass="btn-github" text="Visit profile" />
						</a>
						<p>
							<i className="fas fa-map-marker-alt"></i> {location}
						</p>
					</div>
				</div>
				<Repos repos={repos} user={user} loading={loading} />
			</div>
		);
	}
}

export default User;
