import React from "react";
import { useSelector } from "react-redux";
import Photo from "./Photo";
import {Route} from "react-router-dom";


function Photos() {
  const photos = useSelector((state) => state.photos.items);
  return (
    <div className="main">
        <Route path="/">
            <ul className="photos">
                {photos.map((photo) => {
                    return <Photo key={photo.id} photo={photo} />;
                })}
            </ul>
        </Route>
    </div>
  );
}

export default Photos;
