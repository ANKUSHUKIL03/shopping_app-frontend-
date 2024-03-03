
import React from 'react'
import { data } from '../Product_detail';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { LuIndianRupee } from "react-icons/lu";

import { useParams } from 'react-router-dom';

function ViewDetails() {
    let { id } = useParams();
    id = parseInt(id)

    const product = data.find((d) => d.id === id)

    console.log(product)

    return (
        <>
            <div class="container view mt-2 mb-2">

                <div class="row">
                    <div class="col-sm-6 card-shadow custom-shadow">

                        <img className="d-block w-99 img-fluid mx-auto" src={product.imageSrc} alt="room-img"  />
                    </div>
                    <div class="col-sm-6">
                    <div class="card card-shadow custom shadow h-100" style={{ border: "none" }}>
    <div class="card-body">
        <h4>{product.name}</h4>
        <h2>
            <FaIndianRupeeSign /><span class="text-primary">{product.price}</span>
        </h2>
        <h6 style={{fontFamily:"monospace"}}>M.R.P:<LuIndianRupee />{product.mrp}</h6>
        <button className="btn btn-primary me-2 btn btn-primary fs-5 col-4" >Book Now</button>
    </div>
</div>


            </div>
            </div>
            </div>
        </>

    )
}

export default ViewDetails
