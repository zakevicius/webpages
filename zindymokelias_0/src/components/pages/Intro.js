import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../elements/Button';

const Intro = () => {
  return (
    <div className='intro'>
      Intro
      <Link to='/home'>
        <Button type='primary' text='Come in' />
      </Link>
      <Button type='secondary' text='Test' />
      <Button type='warning' text='Test' />
      <Button type='danger' text='Test' />
      <Button type='success' text='Test' />
    </div>
  )
};

export default Intro;