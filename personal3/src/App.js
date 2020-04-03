import React from "react";
import Header from "./components/page elements/Header";
import Aside from "./components/page elements/Aside";
import Main from "./components/page elements/Main";
import Footer from "./components/page elements/Footer";
import "./style/style.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Aside />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
