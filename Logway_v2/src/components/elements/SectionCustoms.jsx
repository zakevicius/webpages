import React, {useEffect, useRef, useState} from 'react'

const SectionCustoms = () => {  
  const ulRef = useRef(null);
  const titleRef = useRef(null);
  const [shouldSlide, setShouldSlide] = useState(true);
  let liItems;
  
  const checkInView = () => {
    console.log(ulRef.current.offsetTop, window.innerHeight)
    if (ulRef.current.offsetTop < window.innerHeight) {      
      if (shouldSlide) {
        titleRef.current.classList.add('slidingBottom');

        liItems = ulRef.current.querySelectorAll('li');
        liItems.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('slidingLeft');
          }, 50 * i);
        });
        setShouldSlide(false);
      }
    }
  }
  
  useEffect(() => {
    checkInView();
  });
  
  window.addEventListener('scroll', checkInView);
  window.addEventListener('resize', checkInView);
  
  return (
    <section className='customs'>
      <div className='background'>
      </div>
      <div className='sectionContent'>        
        <h2 ref={titleRef}><span className='red'>M</span>uitinės paslaugos</h2>
        <ul ref={ulRef}>
          <li>Importo procedūros</li>
          <li>Eksporto procedūros</li>
          <li>Tranzito procedūros</li>
          <li>Tarpininkavimas muitinėje</li>
          <li>Muitinės sandėliavimo procedūros</li>
          <li>Važtaraščių ir TIR knygelių pildymas</li>
        </ul>
      </div>
    </section>
  )
}

export default SectionCustoms;
