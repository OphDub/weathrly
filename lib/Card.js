import React from 'react';

const Card = (props) => {
  return (
    <div>
      <p>Hour: {props.time.FCTTIME.hour}</p>
      <img src={props.time.icon_url} />
      <p>Temperature: {props.time.temp.english}</p>
    </div>
  )
}

export default Card;