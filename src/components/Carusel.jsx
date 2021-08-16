import { Fragment } from "react";
import useWindowDimensions from "./DimensionsWindow";
import img from "../assets/images/imagen.png";
import imgToGrid from "../assets/images/imagenToGrid.png";
import firstIconToGrid from "../assets/images/firstIconToGrid.png";
import secondIconToGrid from "../assets/images/secondIconToGrid.png";
import thirdIconToGrid from "../assets/images/thirdIconToGrid.png";

export default function Carusel() {
  const { width } = useWindowDimensions();
  const changeImageAcordingToWindowSize = (
    maxWidthParam,
    firstImage,
    secondImage
  ) => {
    if (width >= maxWidthParam) {
      return firstImage;
    } else {
      return secondImage;
    }
  };
  const img2 = "https://source.unsplash.com/random";
  const img3 = "https://source.unsplash.com/random";

  return (
    <Fragment>
      <div className="row bg-blue-700 justify-content-center mb-3">
        <div className="col-lg-10 col-sm-0 p-0">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src={changeImageAcordingToWindowSize(1300, img, imgToGrid)}
                  className="rounded mx-auto d-block w-100"
                  alt="..."
                  width="640"
                  height="450"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={changeImageAcordingToWindowSize(
                    1300,
                    img2,
                    firstIconToGrid
                  )}
                  className="rounded mx-auto d-block w-100"
                  alt="..."
                  width="620"
                  height="450"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={changeImageAcordingToWindowSize(
                    1300,
                    img3,
                    secondIconToGrid
                  )}
                  className="rounded mx-auto d-block w-100"
                  alt="..."
                  width="620"
                  height="450"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={changeImageAcordingToWindowSize(
                    1300,
                    img3,
                    thirdIconToGrid
                  )}
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
          <h1>{width}</h1>
        </div>
      </div>
    </Fragment>
  );
}
