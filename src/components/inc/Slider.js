import React from "react";
import hero1 from "../images/imgsub.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import "./slidersize.css";

function Slider() {
  return (

    <div id="carouselExampleInterval" class="carousel slide container-fluid" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1500">
          <img src={hero1} class="d-block w-100 slidersize" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img src={hero2} class="d-block w-100 slidersize" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={hero3} class="d-block w-100 slidersize" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  );
}
export default Slider;
