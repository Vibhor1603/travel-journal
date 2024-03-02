/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Card(props) {
  return (
    <>
    <div className="Card">
       
      <img src={props.item.image} alt="img" className="place-img" />
      <div className="new" >
      
      <div className="all" >
          <div className="top-line" >
          <img src="./src/assets/placeholder.png" alt="location-marker" className="location-pointer" />
            <p className="first-text">{props.item.country}</p>
            <p className="google-maps-line"><a href={props.item.link}>View on google maps</a></p>
          </div>
          
          <div  className="location-name" >
            <h1>{props.item.name}</h1>
          </div>
          <p className="d-o-t" >{props.item.date_of_travel}</p>
          <p className="info" >{props.item.info}</p>
          </div>
          
      </div>
      
      
      
    </div>
     <hr className="line"/>
     </>
  );
}
