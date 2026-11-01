import "./App.css";
import Logo from "./assets/logo.png";

import { useState } from "react";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	const [page, setPage] = useState<string>("home");

	return (
		<div className='container-fluid'>
			<div className='row'>
				<img
					src={Logo}
					alt='logo'
					className='mt-2 mb-2'
					style={{ width: "256px" }}
				/>
				<Navbar setPage={setPage} />
				{page === "home" ? (
					<Home />
				) : page === "service" ? (
					<Service />
				) : page === "contact" ? (
					<Contact />
				) : null}
			</div>
			<Footer />
		</div>
	);
}

export default App;
