import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function ProductDetails() {
	const productDetails = useLoaderData();

	return (
		<div>
			<div className="container">
				<h2 className="text-center text-md-start mt-3 mt-md-1">
					Product Details
				</h2>
				<h4>
					<Link className="go-back " to={"/"}>
						<p className="text-center text-md-start mt-3 mt-md-1">
							Go to Product List
						</p>
					</Link>
				</h4>
				<div className="card product-card mb-3 px-3 py-4 mx-auto my-5 text-center">
					<div className="card-body d-flex flex-column">
						<h3 className="text-capitalize card-title display-6 ">
							{productDetails.title}
						</h3>
						<hr />
						<p className="text-capitalize card-text mt-auto mb-4">
							{productDetails.body}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
