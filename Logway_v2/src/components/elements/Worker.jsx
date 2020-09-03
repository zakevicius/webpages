import React from "react";
import iconFemale from '../../assets/images/icon_female.png';
import iconMale from '../../assets/images/icon_male.png';

const Worker = ({worker: {name, phone, email, skype: [sk_login, sk_name], gender}}) => {
  return (
    <div className='worker'>
      <p>
        <img className='icon' alt='person outline' src={gender === 'female' ? iconFemale : iconMale} />
        {name}
      </p>
      <p>
        <i className="fas fa-mobile-alt fa-2x"></i>
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
      <p>
        <i className="far fa-envelope fa-2x"></i>
        <a href={`mailto:${email}`}>
        {email}
        </a>
      </p>
      <p>
        <i className="fab fa-skype fa-2x"></i>
        {sk_name}
        <a href={`skype:${sk_login}?call`}>
        <i className="fas fa-phone"></i>
        </a>
        <a href={`skype:${sk_login}?chat`}>
        <i className="far fa-comment"></i>
        </a>
      </p>
    </div>
  );
};

export default Worker;
