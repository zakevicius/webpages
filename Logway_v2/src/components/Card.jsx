import React from "react";
import Info from "./elements/Info.jsx";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-left'>
        <img src='' alt='' className='logo' />
        <div className='address'>Street, House, City, Country</div>
        <Info img='email' text='info@logway1.lt' />
        <Info img='phone' text='852147852' />
      </div>
      <div className='card-right'>
        <h2>Name Surname</h2>
        <Info img='phone' text='+37060000000' />
        <Info img='email' text='name@logway1.lt' />
        <Info img='skype' text='skype' />
      </div>
    </div>
  );
};

export default Card;
