import React from "react";
import "./Style.css";
import Slider from "../inc/Slider";
import { LuIndianRupee } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { data } from '../Product_detail';
import { BsPersonStandingDress } from "react-icons/bs"

function Home() {
  const navigate = useNavigate()

  function viewDetails(id){
    navigate(`/view_details/${id}`)
  }
  return (
    <>
      <Slider/>
     
      <div className="container mt-4">
    <div className="card">
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {data.map((room, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 custom shadow custom-shadow">
                            <img src={room.imageSrc} className="card-img-top" alt="" />
                            <div className="card-body d-flex flex-column">
                                <h5>{room.name}</h5>
                                <h5 className=" mb-auto">
                                    <LuIndianRupee /><span>{room.price}</span>
                                    <span><h6 style={{fontFamily:"monospace"}}>M.R.P:<LuIndianRupee />{room.mrp}</h6></span>
                                </h5>
                                <div className="mt-auto">
                                    <button className="btn btn-primary me-2">Book Now</button>
                                    <button className="btn btn-success" onClick={() => viewDetails(room.id)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
              
         

    ))}
  </div>
</div>
</div>
</div>

    </>
  );
}

export default Home;
