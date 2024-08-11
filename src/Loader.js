export const productsLoader = async () => {
	const response = await fetch(" https://jsonplaceholder.typicode.com/posts");

	const responseData = await response.json();
	return responseData;
};

export const productLoader = async ({ params }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.productId}`
	);

	const responseData = await response.json();
	return responseData;
};
