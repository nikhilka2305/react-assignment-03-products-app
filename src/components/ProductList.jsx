import React from "react";
import { useLoaderData, Link } from "react-router-dom";
export default function ProductList() {
	const productList = useLoaderData();

	return (
		<div>
			<div className="container mb-4">
				<h2 className="text-center text-md-start mt-3 mt-md-1">Product List</h2>

				<ul className="text-center d-flex flex-wrap justify-content-center row">
					{productList.map((product) => {
						return (
							<li
								key={product.id}
								className="list-unstyled col-sm-6 col-md-4 col-lg-3"
							>
								<Link
									className="text-decoration-none text-wrap fs-6"
									to={`/product/${product.id}`}
								>
									<div
										className="product-list product-card card card-link my-3 mx-2 p-2 
 "
									>
										<div className="card-body text-capitalize my-auto">
											<p>{product.id}</p>
											<p>{product.title}</p>
										</div>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
