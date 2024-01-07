import React from "react";
import Img1 from"../images/Img1.jpeg";
import Img2 from"../images/Img2.jpeg";
import Img3 from"../images/Img3.jpeg";
import "./slidersize.css";
function Slider()
{
    return(
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1500">
          <img src={Img2} class="d-block w-100 slidersize" alt="..."/>
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img src={Img1} class="d-block w-100 slidersize" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={Img3} class="d-block w-100 slidersize" alt="..."/>
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
