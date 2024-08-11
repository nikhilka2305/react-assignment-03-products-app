import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { productLoader, productsLoader } from "./Loader";
function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <ProductList />,
			loader: productsLoader,
		},
		{
			path: "/product/:productId",
			element: <ProductDetails />,
			loader: productLoader,
		},
	]);
	return (
		<>
			<div className="container-fluid">
				<h1 className="text-center mt-4 display-2 ">Products App</h1>
				<RouterProvider router={routes} />
			</div>
		</>
	);
}

export default App;
