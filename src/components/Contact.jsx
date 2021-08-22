import contacImage from "../assets/images/contact.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
	return (
		<div className="container-fluid  pt-5 mb-5 mt-5 ">
			<div className="card m-auto rounded-3 shadow-lg" style={{ width: "70%" }}>
				<div className="row justify-content-center">
					<div className="col-md-auto col-lg-7 col-sm-auto">
						<img
							src={contacImage}
							className="rounded-3 h-100 w-100 d-block"
							alt="..."
						/>
					</div>
					<div className="col-md-auto col-lg-5 col-sm-auto p-5">
						<form className="row g-3">
							<div className="col-md-6">
								<label for="inputName4" className="form-label">
									Name
								</label>
								<input className="form-control" id="inputName4" />
							</div>
							<div className="col-md-6">
								<label for="inputLastName" className="form-label">
									Last name
								</label>
								<input
									type="text"
									className="form-control"
									id="inputLastName"
								/>
							</div>
							<div className="col-12">
								<label for="inputEmail" className="form-label">
									Email
								</label>
								<input type="email" className="form-control" id="inputEmail" />
							</div>
							<div className="col-md-6">
								<label for="inputCompany" className="form-label">
									Company name
								</label>
								<input type="text" className="form-control" id="inputCompany" />
							</div>
							<div className="col-md-6">
								<label for="inputPhone" className="form-label">
									Phone
								</label>
								<PhoneInput
									country={"us"}
									containerClass="bg-transparent"
									inputClass="w-100"
									inputProps={{
										name: "phone",
										required: true,
										autoFocus: true,
									}}
								/>
							</div>
							<div className="col-12">
								<label for="inputSubject" className="form-label">
									Message
								</label>
								<textarea
									type="text"
									maxLength="250"
									className="form-control"
									id="inputSubject"
								/>
							</div>
							<div className="col-12">
								<label for="inputService" className="form-label">
									Service
								</label>
								<select id="inputService" className="form-select">
									<option disabled selected>
										Request information about
									</option>
									<option>...</option>
								</select>
							</div>
							<div className="col-6 p-2">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="gridCheck"
									/>
									<label className="form-check-label" for="gridCheck">
										Get information
									</label>
								</div>
							</div>
							<div className="col-6 d-grid gap-2">
								<button type="submit" className="btn pt-1 btn-success d-block">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
