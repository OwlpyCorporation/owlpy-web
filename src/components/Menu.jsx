import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo192 from "../assets/images/logo192.png";
function Menu() {
	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark shadow p-1 mb-5 bg-dark text-blue fixed-top d-block">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src={logo192} height="40px" alt="" />
					</Link>
					<button
						className=" navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
							<li className="nav-item">
								<Link to="/" className="nav-link active" aria-current="page">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="nav-link">
									About us
								</Link>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#a"
									id="navbarScrollingDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Services
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarScrollingDropdown"
								>
									<li>
										<a href="/#list-item-1" className="dropdown-item">
											IA
										</a>
									</li>
									<li>
										<a href="/#list-item-2" className="dropdown-item">
											Data analytics
										</a>
									</li>
									<li>
										<a href="/#list-item-3" className="dropdown-item">
											Machine learning
										</a>
									</li>
									<li>
										<a href="/#list-item-4" className="dropdown-item">
											MultiPlatform projects
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a href="#a" className="dropdown-item">
											Oters
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link
									to="/contact-us"
									className="nav-link"
									tabindex="-1"
									aria-disabled="true"
								>
									Contact Us
								</Link>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2 "
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}

export default Menu;
