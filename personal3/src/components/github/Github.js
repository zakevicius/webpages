import React, { Fragment } from 'react';
import User from './User';
import Loader from '../elements/Loader';

class Github extends React.Component {
  state = {
    user: '',
    repos: [],
    loadingUser: 1,
    loadingRepos: 1,
  };

  componentDidMount() {
    this.fetchUser();
    this.fetchRepos();
  }

  fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/zakevicius`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${process.env.REACT_APP_GITHUB_CLIENT_ID}:${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      },
    });
    const user = await res.json();
    this.setState({ user, loadingUser: 0 });
  };

  fetchRepos = async () => {
    const res = await fetch(`https://api.github.com/users/zakevicius/repos`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${process.env.REACT_APP_GITHUB_CLIENT_ID}:${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      },
    });
    const repos = await res.json();
    this.setState({ repos, loadingRepos: 0 });
  };

  onClickExpand = () => {
    const github = document.getElementById('github-container');
    github.classList.toggle('expand');
    if (this.state.expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  };

  render() {
    const { user, repos, loadingRepos, loadingUser } = this.state;
    return (
      <Fragment>
        <div
          id='github-container'
          className={`github ${
            loadingUser || loadingRepos ? 'loading' : ''
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
              <div className='github-expand'>
                <div
                  className='github-expand-button'
                  onClick={this.onClickExpand}
                >
                  <i
                    className={`fas fa-angle-double-${
                      this.state.expanded ? 'up' : 'down'
                    } fa-2x`}
                  />
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Github;
