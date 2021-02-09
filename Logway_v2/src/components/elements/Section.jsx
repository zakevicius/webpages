import React, {useEffect, useRef, useState} from 'react'

const Section = ({data: {section, title, list}}) => {  
  const ulRef = useRef(null);
  const titleRef = useRef(null);
  const backgroundRef = useRef(null);
  const [shouldSlide, setShouldSlide] = useState(true);
  let listItems;
  
  const checkInView = () => {
    if (window.innerHeight + window.pageYOffset - titleRef.current.offsetHeight > ulRef.current.offsetParent.offsetTop) {      
      if (shouldSlide) {
        titleRef.current.classList.add('slidingBottom');
        backgroundRef.current.classList.add('opacityUp');

        listItems = ulRef.current.querySelectorAll('li');
        listItems.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('slidingLeft');
          }, 150 * i);
        });
        setShouldSlide(false);
      }
    }
  }
  
  useEffect(() => {
    checkInView();
  }, [title]);
  
  window.addEventListener('scroll', checkInView);
  window.addEventListener('resize', checkInView);


  return (
    <section className={section} id={section}>
      <div ref={backgroundRef} className='background'>
      </div>
      <div className='sectionContent'>        
        <h1 ref={titleRef}><span className='red'>{title[0]}</span>{title.slice(1)}</h1>
        <ul ref={ulRef} className="flex">
          {list.map((item, i) => <li key={item}>{item}</li>)}
       </ul>
      </div>
    </section>
  )
}

export default Section;
