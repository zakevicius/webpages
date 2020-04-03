import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos, user, loading }) => {
	const { followers, following, public_repos, public_gists, hireable } = user;

	return (
		<div className="github-repos">
			<div className="badges">
				<div className="badge">
					Public repositories: <span>{public_repos}</span>
				</div>
				<div className="badge">
					Gists: <span>{public_gists}</span>
				</div>
				<div className="badge">
					Followers: <span>{followers}</span>
				</div>
				<div className="badge">
					Following: <span>{following}</span>
				</div>
				<div className="badge">
					Hireable:{" "}
					{hireable ? (
						<i className="fas fa-check text-success" />
					) : (
						<i className="fas fa-times-circle text-danger" />
					)}
				</div>
			</div>
			<div className="repos-container">
				{repos.map((repo, i) => {
					if (loading[0] || loading[1]) {
						return <div></div>;
					} else {
						return (
							<RepoItem
								repo={repo}
								key={repo.id}
								index={i}
								class={`${i % 2 === 0 ? "left" : "right"}`}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Repos;
