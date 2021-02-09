import React from "react";
import sections from './elements/sections.json';

const Header = () => {

  const onClick = (e) => {
    const scrollTarget = document.getElementById(e.currentTarget.dataset.section);
    const xPos = scrollTarget.offsetLeft;
    const yPos = scrollTarget.offsetTop;

    for (let i = 0; i <= yPos; i++) {      
      setTimeout(() => {
        window.scrollTo(xPos, i);
      }, 1 / 10 * i)
    }
  }

  const onMouseEnter = (e) => {
    e.currentTarget.querySelector('.headerInfo-title').classList.add('active');
  }

  const onMouseLeave = (e) => {
    e.currentTarget.querySelector('.headerInfo-title').classList.remove('active');
  }

  return <header>
    <div className='headerLogo'></div>
    <div className='headerInfo'>
      {sections.map(item => (
        <div
          data-section={item.section} 
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
          onClick={onClick} 
          key={item.section} 
          className={`${item.section} header-item`}
        >
          <div className='background'></div>
          <h2 className='headerInfo-title'><span className='red'>{item.title[0]}</span>{item.title.slice(1)}</h2>
        </div>
      ))}
      <div 
        data-section="contacts" 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
        onClick={onClick} 
        className='contacts header-item'
      >
        <div className='background'></div>  
        <h2 className='headerInfo-title'><span className='red'>K</span>ontaktai</h2>
      </div>
    </div>
  </header>;
};

export default Header;
