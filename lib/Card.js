import React from 'react';
import '../styles/Card.scss';

const Card = (props) => {
  return (
    <div className='card'>
      <p>{props.time}</p>
      <img src={props.icon} />
      <p>{props.temp}</p>
    </div>
  );
};

Card.propTypes = {
  time: React.PropTypes.string,
  icon: React.PropTypes.object,
  temp: React.PropTypes.string
};

export default Card;