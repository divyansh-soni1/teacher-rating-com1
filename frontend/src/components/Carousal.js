
import React, { useState, useEffect } from "react";
import { useTypingText } from "./useTypingText";

function Carousal() {
  const { word, stop, start } = useTypingText(
    ["Lets rate your teachers", "Lets rate your teachers", "Lets rate your teachers"],
    130,
    20
  );
  return (
    <div><div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-caption" style={{zIndex:10}}>
        
        <h1 className="container" id="demo" style={{marginBottom:"150px"}}> {word}</h1>
    
    
    
    
        <div className="input-group ">
  <input type="search" className="form-control rounded bg-dark text-light" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary bg-success text-light">search</button>
</div>
        </div>
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/50*50/?colleges " className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/30*50/?colleges" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/30*30/?colleges" className="d-block w-100 " alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}




export default Carousal