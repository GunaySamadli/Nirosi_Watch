import React from 'react';
import './index.scss';

const ListItem = ({
  item: { img, title, price, deliveryFee, serviceTime, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={img} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;