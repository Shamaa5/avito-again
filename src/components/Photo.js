import React from "react";
import { Link } from "react-router-dom";

function Photo(props) {
  return (
    <Link to={`/${props.photo.id}`}>
      <li key={props.photo.id}>
        <img src={props.photo.url} alt="" />
      </li>
    </Link>
  );
}

export default Photo;
