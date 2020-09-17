import React from "react";
import CardBtn from "../CardBtn";
import CardText from '../CardText';
import "./style.css";

function Card(props) {
  return (
    <div className="card" {...props}>
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <CardText 
          oils = {props.ingredients}
          id = {props.id}
        />
        <CardBtn
          style={{ opacity: props.image ? 1 : 0 }}
          onClick={props.handleBtnClick}
          data-value="pass"
        />
      </div>
    </div>
  );
}

export default Card;
