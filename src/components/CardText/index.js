import React from 'react';

function CardText(props) {
  return(
    <ul className='list-group' key={props.id}>
      {props.oils.map((item, index) => (
        <li className='list-group-item' key={props.id + '-' + index.toString()}>
          {item.amount} {item.name} {props.id + '-' + index.toString()}
        </li>
      ))}
    </ul>
  )
};

export default CardText;