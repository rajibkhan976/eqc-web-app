import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
	const [page, setPage] = useState<string>("home");

	return (
		<>
			<Navbar setPage={setPage} />
			<Home />
		</>
	);
}

export default App;
