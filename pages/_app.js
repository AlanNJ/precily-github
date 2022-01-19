import { store } from "../store/index";
import { Provider } from "react-redux";
import Nav from "../components/Nav";
import "../pages/navbar.css";
import "../pages/index.css";
import "antd/dist/antd.css";
import "../pages/home.css";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0"
				></meta>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ToastContainer position="top-center" />
			<Provider store={store}>
				<Nav />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
export default MyApp;
