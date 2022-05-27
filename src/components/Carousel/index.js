import React from "react"

const Carousel = () => {
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel" >

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." ></img>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." ></img>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>

        </div>
    )
}

export default Carousel