import { Fragment } from "react";
import useWindowDimensions from "./DimensionsWindow";
import image from "../assets/images/imagen.png";
import image2 from "../assets/images/imagen2.png";
import image3 from "../assets/images/imagen3.png";
import image4 from "../assets/images/imagen4.png";

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

	return (
		<Fragment>
			<div className="row justify-content-center mb-3">
				<div className="col-lg-10 col-md-7 col-sm-9 p-0 border-radious-2">
					<div
						id="carouselExampleInterval"
						className="carousel carousel-dark slide"
						data-bs-ride="carousel"
					>
						<div class="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleInterval"
								data-bs-slide-to="0"
								class="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleInterval"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleInterval"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
							{width >= 100 ? (
								<button
									type="button"
									data-bs-target="#carouselExampleInterval"
									data-bs-slide-to="3"
									aria-label="Slide 4"
								></button>
							) : (
								""
							)}
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="2000">
								<img
									src={changeImageAcordingToWindowSize(1000, image, imgToGrid)}
									className="rounded-3 mx-auto d-block w-100"
									alt="..."
									width="640"
									height="450"
								/>
							</div>
							<div className="carousel-item" data-bs-interval="2000">
								<img
									src={changeImageAcordingToWindowSize(
										1000,
										image2,
										firstIconToGrid
									)}
									className="rounded-3 mx-auto d-block w-100"
									alt="..."
									width="620"
									height="450"
								/>
							</div>
							<div className="carousel-item">
								<img
									src={changeImageAcordingToWindowSize(
										1000,
										image3,
										secondIconToGrid
									)}
									className="rounded-3 mx-auto d-block w-100"
									alt="..."
									width="620"
									height="450"
								/>
							</div>
							<div className="carousel-item">
								<img
									src={changeImageAcordingToWindowSize(
										1000,
										image4,
										thirdIconToGrid
									)}
									className="rounded-3 mx-auto d-block w-100"
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
