import React from 'react';

const Card = (props) => {
  return (
    <div>
    {console.log('card')}
      <p>Hour: {props.time}</p>
      <img src={props.icon} />
      <p>Temperature: {props.temp}</p>
    </div>
  )
}

export default Card;