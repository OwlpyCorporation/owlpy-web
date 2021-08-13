import { Fragment } from "react";
export default function Carusel() {
  const img = "https://source.unsplash.com/random";
  const img2 = "https://source.unsplash.com/random";
  const img3 = "https://source.unsplash.com/random";

  return (
    <Fragment>
      <div className="row bg-blue-700 justify-content-center mb-3">
        <div className="col-lg-10 col-sm-auto p-0">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src={img}
                  className="rounded mx-auto d-block w-100"
                  alt="..."
                  width="640"
                  height="450"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={img2}
                  className="rounded mx-auto d-block w-100"
                  alt="..."
                  width="620"
                  height="450"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img3}
                  className="rounded mx-auto d-block w-100"
                  alt="..."
                  width="620"
                  height="450"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
