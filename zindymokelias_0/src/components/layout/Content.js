import React from 'react';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';

const Content = () => {
  return (
    <div className="content flex">
      <Main />
      <Sidebar />
    </div>
  )
}

export default Content;
